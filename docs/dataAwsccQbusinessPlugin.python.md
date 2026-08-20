# `dataAwsccQbusinessPlugin` Submodule <a name="`dataAwsccQbusinessPlugin` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessPlugin <a name="DataAwsccQbusinessPlugin" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_plugin awscc_qbusiness_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_plugin#id DataAwsccQbusinessPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQbusinessPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQbusinessPlugin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQbusinessPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.authConfiguration">auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.buildStatus">build_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.customPluginConfiguration">custom_plugin_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginArn">plugin_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList">DataAwsccQbusinessPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `auth_configuration`<sup>Required</sup> <a name="auth_configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.authConfiguration"></a>

```python
auth_configuration: DataAwsccQbusinessPluginAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOutputReference</a>

---

##### `build_status`<sup>Required</sup> <a name="build_status" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.buildStatus"></a>

```python
build_status: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_plugin_configuration`<sup>Required</sup> <a name="custom_plugin_configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.customPluginConfiguration"></a>

```python
custom_plugin_configuration: DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `plugin_arn`<sup>Required</sup> <a name="plugin_arn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginArn"></a>

```python
plugin_arn: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tags"></a>

```python
tags: DataAwsccQbusinessPluginTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList">DataAwsccQbusinessPluginTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessPluginAuthConfiguration <a name="DataAwsccQbusinessPluginAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration()
```


### DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration <a name="DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration()
```


### DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration <a name="DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration()
```


### DataAwsccQbusinessPluginConfig <a name="DataAwsccQbusinessPluginConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_plugin#id DataAwsccQbusinessPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessPluginCustomPluginConfiguration <a name="DataAwsccQbusinessPluginCustomPluginConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration()
```


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema()
```


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3()
```


### DataAwsccQbusinessPluginTags <a name="DataAwsccQbusinessPluginTags" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference <a name="DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---


### DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference <a name="DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---


### DataAwsccQbusinessPluginAuthConfigurationOutputReference <a name="DataAwsccQbusinessPluginAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration">basic_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration">no_auth_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration">o_auth2_client_credential_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration">DataAwsccQbusinessPluginAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth_configuration`<sup>Required</sup> <a name="basic_auth_configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration"></a>

```python
basic_auth_configuration: DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a>

---

##### `no_auth_configuration`<sup>Required</sup> <a name="no_auth_configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration"></a>

```python
no_auth_configuration: str
```

- *Type:* str

---

##### `o_auth2_client_credential_configuration`<sup>Required</sup> <a name="o_auth2_client_credential_configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration"></a>

```python
o_auth2_client_credential_configuration: DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration">DataAwsccQbusinessPluginAuthConfiguration</a>

---


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3"></a>

```python
s3: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema</a>

---


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---


### DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference <a name="DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema">api_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType">api_schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration">DataAwsccQbusinessPluginCustomPluginConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_schema`<sup>Required</sup> <a name="api_schema" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema"></a>

```python
api_schema: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a>

---

##### `api_schema_type`<sup>Required</sup> <a name="api_schema_type" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType"></a>

```python
api_schema_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginCustomPluginConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration">DataAwsccQbusinessPluginCustomPluginConfiguration</a>

---


### DataAwsccQbusinessPluginTagsList <a name="DataAwsccQbusinessPluginTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQbusinessPluginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQbusinessPluginTagsOutputReference <a name="DataAwsccQbusinessPluginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_qbusiness_plugin

dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags">DataAwsccQbusinessPluginTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQbusinessPluginTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags">DataAwsccQbusinessPluginTags</a>

---



