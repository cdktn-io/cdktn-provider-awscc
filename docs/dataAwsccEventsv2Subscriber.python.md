# `dataAwsccEventsv2Subscriber` Submodule <a name="`dataAwsccEventsv2Subscriber` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsv2Subscriber <a name="DataAwsccEventsv2Subscriber" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber awscc_eventsv2_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber#id DataAwsccEventsv2Subscriber#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEventsv2Subscriber resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEventsv2Subscriber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEventsv2Subscriber to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEventsv2Subscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsv2Subscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.batchConfiguration">batch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference">DataAwsccEventsv2SubscriberBatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.busName">bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.filterConfiguration">filter_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference">DataAwsccEventsv2SubscriberFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.invokeConfiguration">invoke_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference">DataAwsccEventsv2SubscriberLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.onFailureConfiguration">on_failure_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference">DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.pointInTimeConfiguration">point_in_time_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference">DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.resumePosition">resume_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference">DataAwsccEventsv2SubscriberRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.startingPosition">starting_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.subscriberArn">subscriber_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList">DataAwsccEventsv2SubscriberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.transformer">transformer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference">DataAwsccEventsv2SubscriberTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `batch_configuration`<sup>Required</sup> <a name="batch_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.batchConfiguration"></a>

```python
batch_configuration: DataAwsccEventsv2SubscriberBatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference">DataAwsccEventsv2SubscriberBatchConfigurationOutputReference</a>

---

##### `bus_name`<sup>Required</sup> <a name="bus_name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.busName"></a>

```python
bus_name: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `filter_configuration`<sup>Required</sup> <a name="filter_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.filterConfiguration"></a>

```python
filter_configuration: DataAwsccEventsv2SubscriberFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference">DataAwsccEventsv2SubscriberFilterConfigurationOutputReference</a>

---

##### `invoke_configuration`<sup>Required</sup> <a name="invoke_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.invokeConfiguration"></a>

```python
invoke_configuration: DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference</a>

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.logConfiguration"></a>

```python
log_configuration: DataAwsccEventsv2SubscriberLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference">DataAwsccEventsv2SubscriberLogConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_failure_configuration`<sup>Required</sup> <a name="on_failure_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.onFailureConfiguration"></a>

```python
on_failure_configuration: DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference">DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference</a>

---

##### `point_in_time_configuration`<sup>Required</sup> <a name="point_in_time_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.pointInTimeConfiguration"></a>

```python
point_in_time_configuration: DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference">DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference</a>

---

##### `resume_position`<sup>Required</sup> <a name="resume_position" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.resumePosition"></a>

```python
resume_position: str
```

- *Type:* str

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.retryPolicy"></a>

```python
retry_policy: DataAwsccEventsv2SubscriberRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference">DataAwsccEventsv2SubscriberRetryPolicyOutputReference</a>

---

##### `starting_position`<sup>Required</sup> <a name="starting_position" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.startingPosition"></a>

```python
starting_position: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscriber_arn`<sup>Required</sup> <a name="subscriber_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.subscriberArn"></a>

```python
subscriber_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tags"></a>

```python
tags: DataAwsccEventsv2SubscriberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList">DataAwsccEventsv2SubscriberTagsList</a>

---

##### `transformer`<sup>Required</sup> <a name="transformer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.transformer"></a>

```python
transformer: DataAwsccEventsv2SubscriberTransformerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference">DataAwsccEventsv2SubscriberTransformerOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsv2SubscriberBatchConfiguration <a name="DataAwsccEventsv2SubscriberBatchConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration()
```


### DataAwsccEventsv2SubscriberConfig <a name="DataAwsccEventsv2SubscriberConfig" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber#id DataAwsccEventsv2Subscriber#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsv2SubscriberFilterConfiguration <a name="DataAwsccEventsv2SubscriberFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration()
```


### DataAwsccEventsv2SubscriberFilterConfigurationFilters <a name="DataAwsccEventsv2SubscriberFilterConfigurationFilters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters()
```


### DataAwsccEventsv2SubscriberInvokeConfiguration <a name="DataAwsccEventsv2SubscriberInvokeConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters()
```


### DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters()
```


### DataAwsccEventsv2SubscriberLogConfiguration <a name="DataAwsccEventsv2SubscriberLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration()
```


### DataAwsccEventsv2SubscriberOnFailureConfiguration <a name="DataAwsccEventsv2SubscriberOnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration()
```


### DataAwsccEventsv2SubscriberPointInTimeConfiguration <a name="DataAwsccEventsv2SubscriberPointInTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration()
```


### DataAwsccEventsv2SubscriberRetryPolicy <a name="DataAwsccEventsv2SubscriberRetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy()
```


### DataAwsccEventsv2SubscriberTags <a name="DataAwsccEventsv2SubscriberTags" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags()
```


### DataAwsccEventsv2SubscriberTransformer <a name="DataAwsccEventsv2SubscriberTransformer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer()
```


### DataAwsccEventsv2SubscriberTransformerJsonataConfiguration <a name="DataAwsccEventsv2SubscriberTransformerJsonataConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsv2SubscriberBatchConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberBatchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize">max_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds">max_batch_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration">DataAwsccEventsv2SubscriberBatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_batch_size`<sup>Required</sup> <a name="max_batch_size" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize"></a>

```python
max_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_batch_window_in_seconds`<sup>Required</sup> <a name="max_batch_window_in_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds"></a>

```python
max_batch_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberBatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration">DataAwsccEventsv2SubscriberBatchConfiguration</a>

---


### DataAwsccEventsv2SubscriberFilterConfigurationFiltersList <a name="DataAwsccEventsv2SubscriberFilterConfigurationFiltersList" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference <a name="DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters">DataAwsccEventsv2SubscriberFilterConfigurationFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberFilterConfigurationFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters">DataAwsccEventsv2SubscriberFilterConfigurationFilters</a>

---


### DataAwsccEventsv2SubscriberFilterConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList">DataAwsccEventsv2SubscriberFilterConfigurationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration">DataAwsccEventsv2SubscriberFilterConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.filters"></a>

```python
filters: DataAwsccEventsv2SubscriberFilterConfigurationFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList">DataAwsccEventsv2SubscriberFilterConfigurationFiltersList</a>

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration">DataAwsccEventsv2SubscriberFilterConfiguration</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType">deduplication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_type`<sup>Required</sup> <a name="deduplication_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```python
deduplication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration">deduplication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata">system_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_configuration`<sup>Required</sup> <a name="deduplication_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration"></a>

```python
deduplication_configuration: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `system_metadata`<sup>Required</sup> <a name="system_metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata"></a>

```python
system_metadata: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId">deduplication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId">event_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deduplication_id`<sup>Required</sup> <a name="deduplication_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId"></a>

```python
deduplication_id: str
```

- *Type:* str

---

##### `event_group_id`<sup>Required</sup> <a name="event_group_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId"></a>

```python
event_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `path_parameter_values`<sup>Required</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey">explicit_hash_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `explicit_hash_key`<sup>Required</sup> <a name="explicit_hash_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey"></a>

```python
explicit_hash_key: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName">durable_execution_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `durable_execution_name`<sup>Required</sup> <a name="durable_execution_name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName"></a>

```python
durable_execution_name: str
```

- *Type:* str

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters">event_bus_v2_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters">http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters">lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters">sns_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters">step_functions_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters">universal_target_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration">DataAwsccEventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_v2_parameters`<sup>Required</sup> <a name="event_bus_v2_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters"></a>

```python
event_bus_v2_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a>

---

##### `http_parameters`<sup>Required</sup> <a name="http_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters"></a>

```python
http_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a>

---

##### `kinesis_parameters`<sup>Required</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters"></a>

```python
kinesis_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a>

---

##### `lambda_parameters`<sup>Required</sup> <a name="lambda_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters"></a>

```python
lambda_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sns_parameters`<sup>Required</sup> <a name="sns_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters"></a>

```python
sns_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a>

---

##### `sqs_parameters`<sup>Required</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters"></a>

```python
sqs_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a>

---

##### `step_functions_parameters`<sup>Required</sup> <a name="step_functions_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters"></a>

```python
step_functions_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a>

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `universal_target_parameters`<sup>Required</sup> <a name="universal_target_parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters"></a>

```python
universal_target_parameters: DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration">DataAwsccEventsv2SubscriberInvokeConfiguration</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue">binary_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_value`<sup>Required</sup> <a name="binary_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes">message_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId">message_deduplication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure">message_structure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_attributes`<sup>Required</sup> <a name="message_attributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes"></a>

```python
message_attributes: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a>

---

##### `message_deduplication_id`<sup>Required</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId"></a>

```python
message_deduplication_id: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `message_structure`<sup>Required</sup> <a name="message_structure" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure"></a>

```python
message_structure: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue">binary_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_value`<sup>Required</sup> <a name="binary_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue">binary_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_value`<sup>Required</sup> <a name="binary_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue"></a>

```python
binary_value: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds">delay_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes">message_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId">message_deduplication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes">message_system_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay_seconds`<sup>Required</sup> <a name="delay_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds"></a>

```python
delay_seconds: str
```

- *Type:* str

---

##### `message_attributes`<sup>Required</sup> <a name="message_attributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes"></a>

```python
message_attributes: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a>

---

##### `message_deduplication_id`<sup>Required</sup> <a name="message_deduplication_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId"></a>

```python
message_deduplication_id: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `message_system_attributes`<sup>Required</sup> <a name="message_system_attributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes"></a>

```python
message_system_attributes: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader">trace_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trace_header`<sup>Required</sup> <a name="trace_header" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader"></a>

```python
trace_header: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds">invocation_timeout_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `invocation_timeout_seconds`<sup>Required</sup> <a name="invocation_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds"></a>

```python
invocation_timeout_seconds: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---


### DataAwsccEventsv2SubscriberLogConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.includePayload">include_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration">DataAwsccEventsv2SubscriberLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_payload`<sup>Required</sup> <a name="include_payload" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.includePayload"></a>

```python
include_payload: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration">DataAwsccEventsv2SubscriberLogConfiguration</a>

---


### DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration">DataAwsccEventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberOnFailureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration">DataAwsccEventsv2SubscriberOnFailureConfiguration</a>

---


### DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint">end_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType">point_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint">starting_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration">DataAwsccEventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_point`<sup>Required</sup> <a name="end_point" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint"></a>

```python
end_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_type`<sup>Required</sup> <a name="point_type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType"></a>

```python
point_type: str
```

- *Type:* str

---

##### `starting_point`<sup>Required</sup> <a name="starting_point" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint"></a>

```python
starting_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberPointInTimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration">DataAwsccEventsv2SubscriberPointInTimeConfiguration</a>

---


### DataAwsccEventsv2SubscriberRetryPolicyOutputReference <a name="DataAwsccEventsv2SubscriberRetryPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds">max_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts">max_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy">retry_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy">DataAwsccEventsv2SubscriberRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_event_age_in_seconds`<sup>Required</sup> <a name="max_event_age_in_seconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds"></a>

```python
max_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_attempts`<sup>Required</sup> <a name="max_retry_attempts" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts"></a>

```python
max_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_strategy`<sup>Required</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy"></a>

```python
retry_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy">DataAwsccEventsv2SubscriberRetryPolicy</a>

---


### DataAwsccEventsv2SubscriberTagsList <a name="DataAwsccEventsv2SubscriberTagsList" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEventsv2SubscriberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEventsv2SubscriberTagsOutputReference <a name="DataAwsccEventsv2SubscriberTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags">DataAwsccEventsv2SubscriberTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags">DataAwsccEventsv2SubscriberTags</a>

---


### DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration">DataAwsccEventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberTransformerJsonataConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration">DataAwsccEventsv2SubscriberTransformerJsonataConfiguration</a>

---


### DataAwsccEventsv2SubscriberTransformerOutputReference <a name="DataAwsccEventsv2SubscriberTransformerOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_eventsv2_subscriber

dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration">jsonata_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference">DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer">DataAwsccEventsv2SubscriberTransformer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jsonata_configuration`<sup>Required</sup> <a name="jsonata_configuration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration"></a>

```python
jsonata_configuration: DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference">DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEventsv2SubscriberTransformer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer">DataAwsccEventsv2SubscriberTransformer</a>

---



