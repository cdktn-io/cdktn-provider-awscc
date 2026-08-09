# `dataAwsccAppstreamStack` Submodule <a name="`dataAwsccAppstreamStack` Submodule" id="@cdktn/provider-awscc.dataAwsccAppstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppstreamStack <a name="DataAwsccAppstreamStack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack awscc_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStack(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack#id DataAwsccAppstreamStack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStack.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppstreamStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppstreamStack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList">DataAwsccAppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.agentAccessConfig">agent_access_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference">DataAwsccAppstreamStackAgentAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.applicationSettings">application_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference">DataAwsccAppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.contentRedirection">content_redirection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference">DataAwsccAppstreamStackContentRedirectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.deleteStorageConnectors">delete_storage_connectors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.embedHostDomains">embed_host_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.feedbackUrl">feedback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.storageConnectors">storage_connectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList">DataAwsccAppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.streamingExperienceSettings">streaming_experience_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference">DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList">DataAwsccAppstreamStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.userSettings">user_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList">DataAwsccAppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.accessEndpoints"></a>

```python
access_endpoints: DataAwsccAppstreamStackAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList">DataAwsccAppstreamStackAccessEndpointsList</a>

---

##### `agent_access_config`<sup>Required</sup> <a name="agent_access_config" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.agentAccessConfig"></a>

```python
agent_access_config: DataAwsccAppstreamStackAgentAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference">DataAwsccAppstreamStackAgentAccessConfigOutputReference</a>

---

##### `application_settings`<sup>Required</sup> <a name="application_settings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.applicationSettings"></a>

```python
application_settings: DataAwsccAppstreamStackApplicationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference">DataAwsccAppstreamStackApplicationSettingsOutputReference</a>

---

##### `attributes_to_delete`<sup>Required</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_redirection`<sup>Required</sup> <a name="content_redirection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.contentRedirection"></a>

```python
content_redirection: DataAwsccAppstreamStackContentRedirectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference">DataAwsccAppstreamStackContentRedirectionOutputReference</a>

---

##### `delete_storage_connectors`<sup>Required</sup> <a name="delete_storage_connectors" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.deleteStorageConnectors"></a>

```python
delete_storage_connectors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `embed_host_domains`<sup>Required</sup> <a name="embed_host_domains" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.embedHostDomains"></a>

```python
embed_host_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feedback_url`<sup>Required</sup> <a name="feedback_url" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.feedbackUrl"></a>

```python
feedback_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `storage_connectors`<sup>Required</sup> <a name="storage_connectors" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.storageConnectors"></a>

```python
storage_connectors: DataAwsccAppstreamStackStorageConnectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList">DataAwsccAppstreamStackStorageConnectorsList</a>

---

##### `streaming_experience_settings`<sup>Required</sup> <a name="streaming_experience_settings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.streamingExperienceSettings"></a>

```python
streaming_experience_settings: DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference">DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tags"></a>

```python
tags: DataAwsccAppstreamStackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList">DataAwsccAppstreamStackTagsList</a>

---

##### `user_settings`<sup>Required</sup> <a name="user_settings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.userSettings"></a>

```python
user_settings: DataAwsccAppstreamStackUserSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList">DataAwsccAppstreamStackUserSettingsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppstreamStackAccessEndpoints <a name="DataAwsccAppstreamStackAccessEndpoints" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints()
```


### DataAwsccAppstreamStackAgentAccessConfig <a name="DataAwsccAppstreamStackAgentAccessConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig()
```


### DataAwsccAppstreamStackAgentAccessConfigSettings <a name="DataAwsccAppstreamStackAgentAccessConfigSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings()
```


### DataAwsccAppstreamStackApplicationSettings <a name="DataAwsccAppstreamStackApplicationSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings()
```


### DataAwsccAppstreamStackConfig <a name="DataAwsccAppstreamStackConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appstream_stack#id DataAwsccAppstreamStack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppstreamStackContentRedirection <a name="DataAwsccAppstreamStackContentRedirection" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection()
```


### DataAwsccAppstreamStackContentRedirectionHostToClient <a name="DataAwsccAppstreamStackContentRedirectionHostToClient" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient()
```


### DataAwsccAppstreamStackStorageConnectors <a name="DataAwsccAppstreamStackStorageConnectors" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors()
```


### DataAwsccAppstreamStackStreamingExperienceSettings <a name="DataAwsccAppstreamStackStreamingExperienceSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings()
```


### DataAwsccAppstreamStackTags <a name="DataAwsccAppstreamStackTags" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackTags()
```


### DataAwsccAppstreamStackUserSettings <a name="DataAwsccAppstreamStackUserSettings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppstreamStackAccessEndpointsList <a name="DataAwsccAppstreamStackAccessEndpointsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamStackAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamStackAccessEndpointsOutputReference <a name="DataAwsccAppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.vpceId">vpce_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints">DataAwsccAppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `vpce_id`<sup>Required</sup> <a name="vpce_id" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackAccessEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAccessEndpoints">DataAwsccAppstreamStackAccessEndpoints</a>

---


### DataAwsccAppstreamStackAgentAccessConfigOutputReference <a name="DataAwsccAppstreamStackAgentAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat">screen_image_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenResolution">screen_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled">screenshots_upload_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList">DataAwsccAppstreamStackAgentAccessConfigSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.userControlMode">user_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig">DataAwsccAppstreamStackAgentAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `screen_image_format`<sup>Required</sup> <a name="screen_image_format" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat"></a>

```python
screen_image_format: str
```

- *Type:* str

---

##### `screen_resolution`<sup>Required</sup> <a name="screen_resolution" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenResolution"></a>

```python
screen_resolution: str
```

- *Type:* str

---

##### `screenshots_upload_enabled`<sup>Required</sup> <a name="screenshots_upload_enabled" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled"></a>

```python
screenshots_upload_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.settings"></a>

```python
settings: DataAwsccAppstreamStackAgentAccessConfigSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList">DataAwsccAppstreamStackAgentAccessConfigSettingsList</a>

---

##### `user_control_mode`<sup>Required</sup> <a name="user_control_mode" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.userControlMode"></a>

```python
user_control_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackAgentAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfig">DataAwsccAppstreamStackAgentAccessConfig</a>

---


### DataAwsccAppstreamStackAgentAccessConfigSettingsList <a name="DataAwsccAppstreamStackAgentAccessConfigSettingsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference <a name="DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction">agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings">DataAwsccAppstreamStackAgentAccessConfigSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_action`<sup>Required</sup> <a name="agent_action" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction"></a>

```python
agent_action: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackAgentAccessConfigSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackAgentAccessConfigSettings">DataAwsccAppstreamStackAgentAccessConfigSettings</a>

---


### DataAwsccAppstreamStackApplicationSettingsOutputReference <a name="DataAwsccAppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.settingsGroup">settings_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings">DataAwsccAppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `settings_group`<sup>Required</sup> <a name="settings_group" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```python
settings_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackApplicationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackApplicationSettings">DataAwsccAppstreamStackApplicationSettings</a>

---


### DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference <a name="DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls">allowed_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls">denied_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient">DataAwsccAppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_urls`<sup>Required</sup> <a name="allowed_urls" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls"></a>

```python
allowed_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_urls`<sup>Required</sup> <a name="denied_urls" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls"></a>

```python
denied_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackContentRedirectionHostToClient
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClient">DataAwsccAppstreamStackContentRedirectionHostToClient</a>

---


### DataAwsccAppstreamStackContentRedirectionOutputReference <a name="DataAwsccAppstreamStackContentRedirectionOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.hostToClient">host_to_client</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference">DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection">DataAwsccAppstreamStackContentRedirection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_to_client`<sup>Required</sup> <a name="host_to_client" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.hostToClient"></a>

```python
host_to_client: DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference">DataAwsccAppstreamStackContentRedirectionHostToClientOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackContentRedirection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackContentRedirection">DataAwsccAppstreamStackContentRedirection</a>

---


### DataAwsccAppstreamStackStorageConnectorsList <a name="DataAwsccAppstreamStackStorageConnectorsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamStackStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamStackStorageConnectorsOutputReference <a name="DataAwsccAppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors">DataAwsccAppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackStorageConnectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStorageConnectors">DataAwsccAppstreamStackStorageConnectors</a>

---


### DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference <a name="DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">preferred_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings">DataAwsccAppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_protocol`<sup>Required</sup> <a name="preferred_protocol" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```python
preferred_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackStreamingExperienceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackStreamingExperienceSettings">DataAwsccAppstreamStackStreamingExperienceSettings</a>

---


### DataAwsccAppstreamStackTagsList <a name="DataAwsccAppstreamStackTagsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamStackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamStackTagsOutputReference <a name="DataAwsccAppstreamStackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags">DataAwsccAppstreamStackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackTags">DataAwsccAppstreamStackTags</a>

---


### DataAwsccAppstreamStackUserSettingsList <a name="DataAwsccAppstreamStackUserSettingsList" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamStackUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamStackUserSettingsOutputReference <a name="DataAwsccAppstreamStackUserSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_stack

dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.maximumLength">maximum_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings">DataAwsccAppstreamStackUserSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `maximum_length`<sup>Required</sup> <a name="maximum_length" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.maximumLength"></a>

```python
maximum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamStackUserSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamStack.DataAwsccAppstreamStackUserSettings">DataAwsccAppstreamStackUserSettings</a>

---



