# `dataAwsccConnectUser` Submodule <a name="`dataAwsccConnectUser` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectUser <a name="DataAwsccConnectUser" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUser(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user#id DataAwsccConnectUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.afterContactWorkConfigs">after_contact_work_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList">DataAwsccConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.autoAcceptConfigs">auto_accept_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList">DataAwsccConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.directoryUserId">directory_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.hierarchyGroupArn">hierarchy_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.identityInfo">identity_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference">DataAwsccConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.persistentConnectionConfigs">persistent_connection_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList">DataAwsccConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneConfig">phone_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference">DataAwsccConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneNumberConfigs">phone_number_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList">DataAwsccConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.routingProfileArn">routing_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.securityProfileArns">security_profile_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList">DataAwsccConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userArn">user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userProficiencies">user_proficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList">DataAwsccConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.voiceEnhancementConfigs">voice_enhancement_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList">DataAwsccConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `after_contact_work_configs`<sup>Required</sup> <a name="after_contact_work_configs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.afterContactWorkConfigs"></a>

```python
after_contact_work_configs: DataAwsccConnectUserAfterContactWorkConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList">DataAwsccConnectUserAfterContactWorkConfigsList</a>

---

##### `auto_accept_configs`<sup>Required</sup> <a name="auto_accept_configs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.autoAcceptConfigs"></a>

```python
auto_accept_configs: DataAwsccConnectUserAutoAcceptConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList">DataAwsccConnectUserAutoAcceptConfigsList</a>

---

##### `directory_user_id`<sup>Required</sup> <a name="directory_user_id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.directoryUserId"></a>

```python
directory_user_id: str
```

- *Type:* str

---

##### `hierarchy_group_arn`<sup>Required</sup> <a name="hierarchy_group_arn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.hierarchyGroupArn"></a>

```python
hierarchy_group_arn: str
```

- *Type:* str

---

##### `identity_info`<sup>Required</sup> <a name="identity_info" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.identityInfo"></a>

```python
identity_info: DataAwsccConnectUserIdentityInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference">DataAwsccConnectUserIdentityInfoOutputReference</a>

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `persistent_connection_configs`<sup>Required</sup> <a name="persistent_connection_configs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.persistentConnectionConfigs"></a>

```python
persistent_connection_configs: DataAwsccConnectUserPersistentConnectionConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList">DataAwsccConnectUserPersistentConnectionConfigsList</a>

---

##### `phone_config`<sup>Required</sup> <a name="phone_config" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneConfig"></a>

```python
phone_config: DataAwsccConnectUserPhoneConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference">DataAwsccConnectUserPhoneConfigOutputReference</a>

---

##### `phone_number_configs`<sup>Required</sup> <a name="phone_number_configs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneNumberConfigs"></a>

```python
phone_number_configs: DataAwsccConnectUserPhoneNumberConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList">DataAwsccConnectUserPhoneNumberConfigsList</a>

---

##### `routing_profile_arn`<sup>Required</sup> <a name="routing_profile_arn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.routingProfileArn"></a>

```python
routing_profile_arn: str
```

- *Type:* str

---

##### `security_profile_arns`<sup>Required</sup> <a name="security_profile_arns" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.securityProfileArns"></a>

```python
security_profile_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tags"></a>

```python
tags: DataAwsccConnectUserTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList">DataAwsccConnectUserTagsList</a>

---

##### `user_arn`<sup>Required</sup> <a name="user_arn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userArn"></a>

```python
user_arn: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_proficiencies`<sup>Required</sup> <a name="user_proficiencies" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userProficiencies"></a>

```python
user_proficiencies: DataAwsccConnectUserUserProficienciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList">DataAwsccConnectUserUserProficienciesList</a>

---

##### `voice_enhancement_configs`<sup>Required</sup> <a name="voice_enhancement_configs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.voiceEnhancementConfigs"></a>

```python
voice_enhancement_configs: DataAwsccConnectUserVoiceEnhancementConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList">DataAwsccConnectUserVoiceEnhancementConfigsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectUserAfterContactWorkConfigs <a name="DataAwsccConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs()
```


### DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig()
```


### DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig()
```


### DataAwsccConnectUserAutoAcceptConfigs <a name="DataAwsccConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs()
```


### DataAwsccConnectUserConfig <a name="DataAwsccConnectUserConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_user#id DataAwsccConnectUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectUserIdentityInfo <a name="DataAwsccConnectUserIdentityInfo" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo()
```


### DataAwsccConnectUserPersistentConnectionConfigs <a name="DataAwsccConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs()
```


### DataAwsccConnectUserPhoneConfig <a name="DataAwsccConnectUserPhoneConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig()
```


### DataAwsccConnectUserPhoneNumberConfigs <a name="DataAwsccConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs()
```


### DataAwsccConnectUserTags <a name="DataAwsccConnectUserTags" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserTags()
```


### DataAwsccConnectUserUserProficiencies <a name="DataAwsccConnectUserUserProficiencies" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies()
```


### DataAwsccConnectUserVoiceEnhancementConfigs <a name="DataAwsccConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">after_contact_work_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_mode`<sup>Required</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```python
after_contact_work_mode: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">after_contact_work_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_mode`<sup>Required</sup> <a name="after_contact_work_mode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```python
after_contact_work_mode: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### DataAwsccConnectUserAfterContactWorkConfigsList <a name="DataAwsccConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserAfterContactWorkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserAfterContactWorkConfigsOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">after_contact_work_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">agent_first_callback_after_contact_work_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs">DataAwsccConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_config`<sup>Required</sup> <a name="after_contact_work_config" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```python
after_contact_work_config: DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `agent_first_callback_after_contact_work_config`<sup>Required</sup> <a name="agent_first_callback_after_contact_work_config" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```python
agent_first_callback_after_contact_work_config: DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserAfterContactWorkConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs">DataAwsccConnectUserAfterContactWorkConfigs</a>

---


### DataAwsccConnectUserAutoAcceptConfigsList <a name="DataAwsccConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserAutoAcceptConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserAutoAcceptConfigsOutputReference <a name="DataAwsccConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">agent_first_callback_auto_accept</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">auto_accept</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs">DataAwsccConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_first_callback_auto_accept`<sup>Required</sup> <a name="agent_first_callback_auto_accept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```python
agent_first_callback_auto_accept: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```python
auto_accept: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserAutoAcceptConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs">DataAwsccConnectUserAutoAcceptConfigs</a>

---


### DataAwsccConnectUserIdentityInfoOutputReference <a name="DataAwsccConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.mobile">mobile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.secondaryEmail">secondary_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo">DataAwsccConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.mobile"></a>

```python
mobile: str
```

- *Type:* str

---

##### `secondary_email`<sup>Required</sup> <a name="secondary_email" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```python
secondary_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserIdentityInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo">DataAwsccConnectUserIdentityInfo</a>

---


### DataAwsccConnectUserPersistentConnectionConfigsList <a name="DataAwsccConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserPersistentConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserPersistentConnectionConfigsOutputReference <a name="DataAwsccConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">persistent_connection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs">DataAwsccConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `persistent_connection`<sup>Required</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```python
persistent_connection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserPersistentConnectionConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs">DataAwsccConnectUserPersistentConnectionConfigs</a>

---


### DataAwsccConnectUserPhoneConfigOutputReference <a name="DataAwsccConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.autoAccept">auto_accept</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">desk_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.persistentConnection">persistent_connection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.phoneType">phone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig">DataAwsccConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```python
auto_accept: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `desk_phone_number`<sup>Required</sup> <a name="desk_phone_number" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```python
desk_phone_number: str
```

- *Type:* str

---

##### `persistent_connection`<sup>Required</sup> <a name="persistent_connection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```python
persistent_connection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserPhoneConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig">DataAwsccConnectUserPhoneConfig</a>

---


### DataAwsccConnectUserPhoneNumberConfigsList <a name="DataAwsccConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserPhoneNumberConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserPhoneNumberConfigsOutputReference <a name="DataAwsccConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneType">phone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs">DataAwsccConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserPhoneNumberConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs">DataAwsccConnectUserPhoneNumberConfigs</a>

---


### DataAwsccConnectUserTagsList <a name="DataAwsccConnectUserTagsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserTagsOutputReference <a name="DataAwsccConnectUserTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags">DataAwsccConnectUserTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags">DataAwsccConnectUserTags</a>

---


### DataAwsccConnectUserUserProficienciesList <a name="DataAwsccConnectUserUserProficienciesList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserUserProficienciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserUserProficienciesOutputReference <a name="DataAwsccConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.level">level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies">DataAwsccConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.level"></a>

```python
level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserUserProficiencies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies">DataAwsccConnectUserUserProficiencies</a>

---


### DataAwsccConnectUserVoiceEnhancementConfigsList <a name="DataAwsccConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectUserVoiceEnhancementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectUserVoiceEnhancementConfigsOutputReference <a name="DataAwsccConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_user

dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">voice_enhancement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs">DataAwsccConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `voice_enhancement_mode`<sup>Required</sup> <a name="voice_enhancement_mode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```python
voice_enhancement_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectUserVoiceEnhancementConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs">DataAwsccConnectUserVoiceEnhancementConfigs</a>

---



