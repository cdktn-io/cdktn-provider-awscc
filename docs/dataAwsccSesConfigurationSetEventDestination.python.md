# `dataAwsccSesConfigurationSetEventDestination` Submodule <a name="`dataAwsccSesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesConfigurationSetEventDestination <a name="DataAwsccSesConfigurationSetEventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set_event_destination#id DataAwsccSesConfigurationSetEventDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSesConfigurationSetEventDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetEventDestinationId">configuration_set_event_destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.eventDestination">event_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration_set_event_destination_id`<sup>Required</sup> <a name="configuration_set_event_destination_id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```python
configuration_set_event_destination_id: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.eventDestination"></a>

```python
event_destination: DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesConfigurationSetEventDestinationConfig <a name="DataAwsccSesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set_event_destination#id DataAwsccSesConfigurationSetEventDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesConfigurationSetEventDestinationEventDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination()
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination()
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations()
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination()
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination()
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">default_dimension_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">dimension_value_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_dimension_value`<sup>Required</sup> <a name="default_dimension_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```python
default_dimension_value: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `dimension_value_source`<sup>Required</sup> <a name="dimension_value_source" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```python
dimension_value_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">dimension_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_configurations`<sup>Required</sup> <a name="dimension_configurations" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```python
dimension_configurations: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">cloudwatch_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">event_bridge_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination">DataAwsccSesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_destination`<sup>Required</sup> <a name="cloudwatch_destination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```python
cloudwatch_destination: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `event_bridge_destination`<sup>Required</sup> <a name="event_bridge_destination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```python
event_bridge_destination: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `kinesis_firehose_destination`<sup>Required</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sns_destination`<sup>Required</sup> <a name="sns_destination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```python
sns_destination: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesConfigurationSetEventDestinationEventDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination">DataAwsccSesConfigurationSetEventDestinationEventDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_configuration_set_event_destination

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



