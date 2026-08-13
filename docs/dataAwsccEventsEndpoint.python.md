# `dataAwsccEventsEndpoint` Submodule <a name="`dataAwsccEventsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsEndpoint <a name="DataAwsccEventsEndpoint" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_endpoint awscc_events_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_endpoint#id DataAwsccEventsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEventsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEventsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEventsEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEventsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.eventBuses">event_buses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList">DataAwsccEventsEndpointEventBusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.replicationConfig">replication_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference">DataAwsccEventsEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference">DataAwsccEventsEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `event_buses`<sup>Required</sup> <a name="event_buses" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.eventBuses"></a>

```python
event_buses: DataAwsccEventsEndpointEventBusesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList">DataAwsccEventsEndpointEventBusesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replication_config`<sup>Required</sup> <a name="replication_config" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.replicationConfig"></a>

```python
replication_config: DataAwsccEventsEndpointReplicationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference">DataAwsccEventsEndpointReplicationConfigOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.routingConfig"></a>

```python
routing_config: DataAwsccEventsEndpointRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference">DataAwsccEventsEndpointRoutingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsEndpointConfig <a name="DataAwsccEventsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/events_endpoint#id DataAwsccEventsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsEndpointEventBuses <a name="DataAwsccEventsEndpointEventBuses" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses()
```


### DataAwsccEventsEndpointReplicationConfig <a name="DataAwsccEventsEndpointReplicationConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig()
```


### DataAwsccEventsEndpointRoutingConfig <a name="DataAwsccEventsEndpointRoutingConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig()
```


### DataAwsccEventsEndpointRoutingConfigFailoverConfig <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfig" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig()
```


### DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary()
```


### DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsEndpointEventBusesList <a name="DataAwsccEventsEndpointEventBusesList" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsEndpointEventBusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsEndpointEventBusesOutputReference <a name="DataAwsccEventsEndpointEventBusesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses">DataAwsccEventsEndpointEventBuses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBusesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsEndpointEventBuses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointEventBuses">DataAwsccEventsEndpointEventBuses</a>

---


### DataAwsccEventsEndpointReplicationConfigOutputReference <a name="DataAwsccEventsEndpointReplicationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig">DataAwsccEventsEndpointReplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsEndpointReplicationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointReplicationConfig">DataAwsccEventsEndpointReplicationConfig</a>

---


### DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">secondary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig">DataAwsccEventsEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```python
primary: DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```python
secondary: DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsEndpointRoutingConfigFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfig">DataAwsccEventsEndpointRoutingConfigFailoverConfig</a>

---


### DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary">DataAwsccEventsEndpointRoutingConfigFailoverConfigPrimary</a>

---


### DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary">DataAwsccEventsEndpointRoutingConfigFailoverConfigSecondary</a>

---


### DataAwsccEventsEndpointRoutingConfigOutputReference <a name="DataAwsccEventsEndpointRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_events_endpoint

dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig">DataAwsccEventsEndpointRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```python
failover_config: DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference">DataAwsccEventsEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsEndpointRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsEndpoint.DataAwsccEventsEndpointRoutingConfig">DataAwsccEventsEndpointRoutingConfig</a>

---



