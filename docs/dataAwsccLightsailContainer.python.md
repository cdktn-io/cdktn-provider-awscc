# `dataAwsccLightsailContainer` Submodule <a name="`dataAwsccLightsailContainer` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailContainer <a name="DataAwsccLightsailContainer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_container awscc_lightsail_container}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainer(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_container#id DataAwsccLightsailContainer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLightsailContainer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLightsailContainer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLightsailContainer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLightsailContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerArn">container_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerServiceDeployment">container_service_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.isDisabled">is_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.power">power</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.publicDomainNames">public_domain_names</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList">DataAwsccLightsailContainerPublicDomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList">DataAwsccLightsailContainerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `container_arn`<sup>Required</sup> <a name="container_arn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerArn"></a>

```python
container_arn: str
```

- *Type:* str

---

##### `container_service_deployment`<sup>Required</sup> <a name="container_service_deployment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerServiceDeployment"></a>

```python
container_service_deployment: DataAwsccLightsailContainerContainerServiceDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentOutputReference</a>

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.power"></a>

```python
power: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `private_registry_access`<sup>Required</sup> <a name="private_registry_access" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.privateRegistryAccess"></a>

```python
private_registry_access: DataAwsccLightsailContainerPrivateRegistryAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessOutputReference</a>

---

##### `public_domain_names`<sup>Required</sup> <a name="public_domain_names" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.publicDomainNames"></a>

```python
public_domain_names: DataAwsccLightsailContainerPublicDomainNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList">DataAwsccLightsailContainerPublicDomainNamesList</a>

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tags"></a>

```python
tags: DataAwsccLightsailContainerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList">DataAwsccLightsailContainerTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailContainerConfig <a name="DataAwsccLightsailContainerConfig" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_container#id DataAwsccLightsailContainer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailContainerContainerServiceDeployment <a name="DataAwsccLightsailContainerContainerServiceDeployment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment()
```


### DataAwsccLightsailContainerContainerServiceDeploymentContainers <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers()
```


### DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment()
```


### DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts()
```


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint()
```


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig()
```


### DataAwsccLightsailContainerPrivateRegistryAccess <a name="DataAwsccLightsailContainerPrivateRegistryAccess" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess()
```


### DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole <a name="DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole()
```


### DataAwsccLightsailContainerPublicDomainNames <a name="DataAwsccLightsailContainerPublicDomainNames" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames()
```


### DataAwsccLightsailContainerTags <a name="DataAwsccLightsailContainerTags" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersList <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList">DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers">DataAwsccLightsailContainerContainerServiceDeploymentContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment"></a>

```python
environment: DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports"></a>

```python
ports: DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList">DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerContainerServiceDeploymentContainers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers">DataAwsccLightsailContainerContainerServiceDeploymentContainers</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts">DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts">DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList">DataAwsccLightsailContainerContainerServiceDeploymentContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint">public_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment">DataAwsccLightsailContainerContainerServiceDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.containers"></a>

```python
containers: DataAwsccLightsailContainerContainerServiceDeploymentContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList">DataAwsccLightsailContainerContainerServiceDeploymentContainersList</a>

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint"></a>

```python
public_endpoint: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerContainerServiceDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment">DataAwsccLightsailContainerContainerServiceDeployment</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes">success_codes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `success_codes`<sup>Required</sup> <a name="success_codes" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes"></a>

```python
success_codes: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig"></a>

```python
health_check_config: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---


### DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">is_active</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---


### DataAwsccLightsailContainerPrivateRegistryAccessOutputReference <a name="DataAwsccLightsailContainerPrivateRegistryAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole">ecr_image_puller_role</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess">DataAwsccLightsailContainerPrivateRegistryAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ecr_image_puller_role`<sup>Required</sup> <a name="ecr_image_puller_role" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```python
ecr_image_puller_role: DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerPrivateRegistryAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess">DataAwsccLightsailContainerPrivateRegistryAccess</a>

---


### DataAwsccLightsailContainerPublicDomainNamesList <a name="DataAwsccLightsailContainerPublicDomainNamesList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLightsailContainerPublicDomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLightsailContainerPublicDomainNamesOutputReference <a name="DataAwsccLightsailContainerPublicDomainNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames">DataAwsccLightsailContainerPublicDomainNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerPublicDomainNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames">DataAwsccLightsailContainerPublicDomainNames</a>

---


### DataAwsccLightsailContainerTagsList <a name="DataAwsccLightsailContainerTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLightsailContainerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLightsailContainerTagsOutputReference <a name="DataAwsccLightsailContainerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lightsail_container

dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags">DataAwsccLightsailContainerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLightsailContainerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags">DataAwsccLightsailContainerTags</a>

---



