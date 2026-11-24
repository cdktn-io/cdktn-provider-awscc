# `dataAwsccEventsv2EventSource` Submodule <a name="`dataAwsccEventsv2EventSource` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsv2EventSource <a name="DataAwsccEventsv2EventSource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source awscc_eventsv2_event_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source#id DataAwsccEventsv2EventSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEventsv2EventSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEventsv2EventSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEventsv2EventSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEventsv2EventSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsv2EventSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference">DataAwsccEventsv2EventSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventSourceArn">event_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.revoked">revoked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList">DataAwsccEventsv2EventSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.configuration"></a>

```python
configuration: DataAwsccEventsv2EventSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.details"></a>

```python
details: DataAwsccEventsv2EventSourceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference">DataAwsccEventsv2EventSourceDetailsOutputReference</a>

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `event_source_arn`<sup>Required</sup> <a name="event_source_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.eventSourceArn"></a>

```python
event_source_arn: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `revoked`<sup>Required</sup> <a name="revoked" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.revoked"></a>

```python
revoked: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tags"></a>

```python
tags: DataAwsccEventsv2EventSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList">DataAwsccEventsv2EventSourceTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsv2EventSourceConfig <a name="DataAwsccEventsv2EventSourceConfig" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/eventsv2_event_source#id DataAwsccEventsv2EventSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsv2EventSourceConfiguration <a name="DataAwsccEventsv2EventSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration()
```


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration()
```


### DataAwsccEventsv2EventSourceDetails <a name="DataAwsccEventsv2EventSourceDetails" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetails()
```


### DataAwsccEventsv2EventSourceDetailsWebhookDetails <a name="DataAwsccEventsv2EventSourceDetailsWebhookDetails" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetails()
```


### DataAwsccEventsv2EventSourceTags <a name="DataAwsccEventsv2EventSourceTags" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService">aws_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration">on_failure_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_service`<sup>Required</sup> <a name="aws_service" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.awsService"></a>

```python
aws_service: str
```

- *Type:* str

---

##### `on_failure_configuration`<sup>Required</sup> <a name="on_failure_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```python
on_failure_configuration: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration">aws_service_events_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration">partner_events_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfiguration">webhook_events_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration">DataAwsccEventsv2EventSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_service_events_configuration`<sup>Required</sup> <a name="aws_service_events_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.awsServiceEventsConfiguration"></a>

```python
aws_service_events_configuration: DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationAwsServiceEventsConfigurationOutputReference</a>

---

##### `partner_events_configuration`<sup>Required</sup> <a name="partner_events_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.partnerEventsConfiguration"></a>

```python
partner_events_configuration: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference</a>

---

##### `webhook_events_configuration`<sup>Required</sup> <a name="webhook_events_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.webhookEventsConfiguration"></a>

```python
webhook_events_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfiguration">DataAwsccEventsv2EventSourceConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration">on_failure_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier">partner_bus_kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn">partner_event_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure_configuration`<sup>Required</sup> <a name="on_failure_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.onFailureConfiguration"></a>

```python
on_failure_configuration: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOnFailureConfigurationOutputReference</a>

---

##### `partner_bus_kms_key_identifier`<sup>Required</sup> <a name="partner_bus_kms_key_identifier" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerBusKmsKeyIdentifier"></a>

```python
partner_bus_kms_key_identifier: str
```

- *Type:* str

---

##### `partner_event_source_arn`<sup>Required</sup> <a name="partner_event_source_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.partnerEventSourceArn"></a>

```python
partner_event_source_arn: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationPartnerEventsConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeader">message_id_http_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncoding">secret_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValue">secret_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeader">signature_http_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefix">signature_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageComposition">signed_message_composition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeader">timestamp_http_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefix">timestamp_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSeconds">timestamp_tolerance_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `message_id_http_header`<sup>Required</sup> <a name="message_id_http_header" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.messageIdHttpHeader"></a>

```python
message_id_http_header: str
```

- *Type:* str

---

##### `secret_encoding`<sup>Required</sup> <a name="secret_encoding" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretEncoding"></a>

```python
secret_encoding: str
```

- *Type:* str

---

##### `secret_value`<sup>Required</sup> <a name="secret_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.secretValue"></a>

```python
secret_value: str
```

- *Type:* str

---

##### `signature_http_header`<sup>Required</sup> <a name="signature_http_header" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signatureHttpHeader"></a>

```python
signature_http_header: str
```

- *Type:* str

---

##### `signature_prefix`<sup>Required</sup> <a name="signature_prefix" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signaturePrefix"></a>

```python
signature_prefix: str
```

- *Type:* str

---

##### `signed_message_composition`<sup>Required</sup> <a name="signed_message_composition" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.signedMessageComposition"></a>

```python
signed_message_composition: str
```

- *Type:* str

---

##### `timestamp_http_header`<sup>Required</sup> <a name="timestamp_http_header" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampHttpHeader"></a>

```python
timestamp_http_header: str
```

- *Type:* str

---

##### `timestamp_prefix`<sup>Required</sup> <a name="timestamp_prefix" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampPrefix"></a>

```python
timestamp_prefix: str
```

- *Type:* str

---

##### `timestamp_tolerance_in_seconds`<sup>Required</sup> <a name="timestamp_tolerance_in_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.timestampToleranceInSeconds"></a>

```python
timestamp_tolerance_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfiguration">basic_http_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfiguration">hmac_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfiguration">static_token_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_http_auth_configuration`<sup>Required</sup> <a name="basic_http_auth_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.basicHttpAuthConfiguration"></a>

```python
basic_http_auth_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationBasicHttpAuthConfigurationOutputReference</a>

---

##### `hmac_auth_configuration`<sup>Required</sup> <a name="hmac_auth_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.hmacAuthConfiguration"></a>

```python
hmac_auth_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationHmacAuthConfigurationOutputReference</a>

---

##### `static_token_auth_configuration`<sup>Required</sup> <a name="static_token_auth_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.staticTokenAuthConfiguration"></a>

```python
static_token_auth_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValue">secret_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeader">token_http_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_value`<sup>Required</sup> <a name="secret_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.secretValue"></a>

```python
secret_value: str
```

- *Type:* str

---

##### `token_http_header`<sup>Required</sup> <a name="token_http_header" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.tokenHttpHeader"></a>

```python
token_http_header: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationStaticTokenAuthConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationType">deduplication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_type`<sup>Required</sup> <a name="deduplication_type" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```python
deduplication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayload">include_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_payload`<sup>Required</sup> <a name="include_payload" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.includePayload"></a>

```python
include_payload: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfiguration</a>

---


### DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference <a name="DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfiguration">auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfiguration">deduplication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeaders">metadata_http_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_configuration`<sup>Required</sup> <a name="auth_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.authConfiguration"></a>

```python
auth_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationAuthConfigurationOutputReference</a>

---

##### `deduplication_configuration`<sup>Required</sup> <a name="deduplication_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.deduplicationConfiguration"></a>

```python
deduplication_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationDeduplicationConfigurationOutputReference</a>

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.logConfiguration"></a>

```python
log_configuration: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationLogConfigurationOutputReference</a>

---

##### `metadata_http_headers`<sup>Required</sup> <a name="metadata_http_headers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.metadataHttpHeaders"></a>

```python
metadata_http_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration">DataAwsccEventsv2EventSourceConfigurationWebhookEventsConfiguration</a>

---


### DataAwsccEventsv2EventSourceDetailsOutputReference <a name="DataAwsccEventsv2EventSourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.webhookDetails">webhook_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference">DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetails">DataAwsccEventsv2EventSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `webhook_details`<sup>Required</sup> <a name="webhook_details" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.webhookDetails"></a>

```python
webhook_details: DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference">DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetails">DataAwsccEventsv2EventSourceDetails</a>

---


### DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference <a name="DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetails">DataAwsccEventsv2EventSourceDetailsWebhookDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceDetailsWebhookDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceDetailsWebhookDetails">DataAwsccEventsv2EventSourceDetailsWebhookDetails</a>

---


### DataAwsccEventsv2EventSourceTagsList <a name="DataAwsccEventsv2EventSourceTagsList" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsv2EventSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsv2EventSourceTagsOutputReference <a name="DataAwsccEventsv2EventSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_event_source

dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags">DataAwsccEventsv2EventSourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2EventSourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2EventSource.DataAwsccEventsv2EventSourceTags">DataAwsccEventsv2EventSourceTags</a>

---



