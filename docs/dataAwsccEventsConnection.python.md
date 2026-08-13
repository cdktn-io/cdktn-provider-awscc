# `dataAwsccEventsConnection` Submodule <a name="`dataAwsccEventsConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsConnection <a name="DataAwsccEventsConnection" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_connection awscc_events_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnection(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_connection#id DataAwsccEventsConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEventsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEventsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEventsConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEventsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arnForPolicy">arn_for_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authParameters">auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.invocationConnectivityParameters">invocation_connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_for_policy`<sup>Required</sup> <a name="arn_for_policy" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.arnForPolicy"></a>

```python
arn_for_policy: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `auth_parameters`<sup>Required</sup> <a name="auth_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.authParameters"></a>

```python
auth_parameters: DataAwsccEventsConnectionAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `invocation_connectivity_parameters`<sup>Required</sup> <a name="invocation_connectivity_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.invocationConnectivityParameters"></a>

```python
invocation_connectivity_parameters: DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference</a>

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsConnectionAuthParameters <a name="DataAwsccEventsConnectionAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters()
```


### DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters <a name="DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters()
```


### DataAwsccEventsConnectionAuthParametersBasicAuthParameters <a name="DataAwsccEventsConnectionAuthParametersBasicAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters()
```


### DataAwsccEventsConnectionAuthParametersConnectivityParameters <a name="DataAwsccEventsConnectionAuthParametersConnectivityParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters()
```


### DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters <a name="DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters()
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters()
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters()
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters()
```


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters()
```


### DataAwsccEventsConnectionAuthParametersOAuthParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters()
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters()
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters()
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters()
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters()
```


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters()
```


### DataAwsccEventsConnectionConfig <a name="DataAwsccEventsConnectionConfig" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_connection#id DataAwsccEventsConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsConnectionInvocationConnectivityParameters <a name="DataAwsccEventsConnectionInvocationConnectivityParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters()
```


### DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters <a name="DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName">api_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue">api_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters">DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_name`<sup>Required</sup> <a name="api_key_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName"></a>

```python
api_key_name: str
```

- *Type:* str

---

##### `api_key_value`<sup>Required</sup> <a name="api_key_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue"></a>

```python
api_key_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters">DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters</a>

---


### DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters">DataAwsccEventsConnectionAuthParametersBasicAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersBasicAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParameters">DataAwsccEventsConnectionAuthParametersBasicAuthParameters</a>

---


### DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters">resource_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters">DataAwsccEventsConnectionAuthParametersConnectivityParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_parameters`<sup>Required</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters"></a>

```python
resource_parameters: DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParameters">DataAwsccEventsConnectionAuthParametersConnectivityParameters</a>

---


### DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">resource_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_association_arn`<sup>Required</sup> <a name="resource_association_arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```python
resource_association_arn: str
```

- *Type:* str

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters">DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters">body_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_parameters`<sup>Required</sup> <a name="body_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters"></a>

```python
body_parameters: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a>

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a>

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParameters</a>

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters">body_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_parameters`<sup>Required</sup> <a name="body_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters"></a>

```python
body_parameters: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a>

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a>

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```python
is_value_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters">client_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters">o_auth_http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters">DataAwsccEventsConnectionAuthParametersOAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_parameters`<sup>Required</sup> <a name="client_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters"></a>

```python
client_parameters: DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a>

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `o_auth_http_parameters`<sup>Required</sup> <a name="o_auth_http_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters"></a>

```python
o_auth_http_parameters: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParametersOAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParameters">DataAwsccEventsConnectionAuthParametersOAuthParameters</a>

---


### DataAwsccEventsConnectionAuthParametersOutputReference <a name="DataAwsccEventsConnectionAuthParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters">api_key_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.basicAuthParameters">basic_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.connectivityParameters">connectivity_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.invocationHttpParameters">invocation_http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.oAuthParameters">o_auth_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters">DataAwsccEventsConnectionAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_auth_parameters`<sup>Required</sup> <a name="api_key_auth_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters"></a>

```python
api_key_auth_parameters: DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a>

---

##### `basic_auth_parameters`<sup>Required</sup> <a name="basic_auth_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.basicAuthParameters"></a>

```python
basic_auth_parameters: DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference</a>

---

##### `connectivity_parameters`<sup>Required</sup> <a name="connectivity_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.connectivityParameters"></a>

```python
connectivity_parameters: DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference">DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference</a>

---

##### `invocation_http_parameters`<sup>Required</sup> <a name="invocation_http_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```python
invocation_http_parameters: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference">DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `o_auth_parameters`<sup>Required</sup> <a name="o_auth_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.oAuthParameters"></a>

```python
o_auth_parameters: DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference">DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionAuthParameters">DataAwsccEventsConnectionAuthParameters</a>

---


### DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference <a name="DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters">resource_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters">DataAwsccEventsConnectionInvocationConnectivityParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_parameters`<sup>Required</sup> <a name="resource_parameters" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters"></a>

```python
resource_parameters: DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionInvocationConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParameters">DataAwsccEventsConnectionInvocationConnectivityParameters</a>

---


### DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference <a name="DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_connection

dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">resource_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_association_arn`<sup>Required</sup> <a name="resource_association_arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```python
resource_association_arn: str
```

- *Type:* str

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsConnection.DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters">DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters</a>

---



