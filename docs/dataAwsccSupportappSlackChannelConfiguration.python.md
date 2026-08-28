# `dataAwsccSupportappSlackChannelConfiguration` Submodule <a name="`dataAwsccSupportappSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSupportappSlackChannelConfiguration <a name="DataAwsccSupportappSlackChannelConfiguration" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportapp_slack_channel_configuration

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration#id DataAwsccSupportappSlackChannelConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_supportapp_slack_channel_configuration

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_supportapp_slack_channel_configuration

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_supportapp_slack_channel_configuration

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_supportapp_slack_channel_configuration

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSupportappSlackChannelConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSupportappSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSupportappSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelRoleArn">channel_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase">notify_on_add_correspondence_to_case</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCaseSeverity">notify_on_case_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase">notify_on_create_or_reopen_case</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnResolveCase">notify_on_resolve_case</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `channel_role_arn`<sup>Required</sup> <a name="channel_role_arn" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.channelRoleArn"></a>

```python
channel_role_arn: str
```

- *Type:* str

---

##### `notify_on_add_correspondence_to_case`<sup>Required</sup> <a name="notify_on_add_correspondence_to_case" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase"></a>

```python
notify_on_add_correspondence_to_case: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `notify_on_case_severity`<sup>Required</sup> <a name="notify_on_case_severity" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCaseSeverity"></a>

```python
notify_on_case_severity: str
```

- *Type:* str

---

##### `notify_on_create_or_reopen_case`<sup>Required</sup> <a name="notify_on_create_or_reopen_case" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase"></a>

```python
notify_on_create_or_reopen_case: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `notify_on_resolve_case`<sup>Required</sup> <a name="notify_on_resolve_case" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.notifyOnResolveCase"></a>

```python
notify_on_resolve_case: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSupportappSlackChannelConfigurationConfig <a name="DataAwsccSupportappSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_supportapp_slack_channel_configuration

dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSupportappSlackChannelConfiguration.DataAwsccSupportappSlackChannelConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/supportapp_slack_channel_configuration#id DataAwsccSupportappSlackChannelConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



