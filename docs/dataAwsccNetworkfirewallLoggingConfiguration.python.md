# `dataAwsccNetworkfirewallLoggingConfiguration` Submodule <a name="`dataAwsccNetworkfirewallLoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallLoggingConfiguration <a name="DataAwsccNetworkfirewallLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_logging_configuration#id DataAwsccNetworkfirewallLoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkfirewallLoggingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkfirewallLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard">enable_monitoring_dashboard</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallArn">firewall_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallName">firewall_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `enable_monitoring_dashboard`<sup>Required</sup> <a name="enable_monitoring_dashboard" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard"></a>

```python
enable_monitoring_dashboard: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `firewall_arn`<sup>Required</sup> <a name="firewall_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallArn"></a>

```python
firewall_arn: str
```

- *Type:* str

---

##### `firewall_name`<sup>Required</sup> <a name="firewall_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallName"></a>

```python
firewall_name: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.loggingConfiguration"></a>

```python
logging_configuration: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallLoggingConfigurationConfig <a name="DataAwsccNetworkfirewallLoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkfirewall_logging_configuration#id DataAwsccNetworkfirewallLoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration()
```


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination">log_destination</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination"></a>

```python
log_destination: StringMap
```

- *Type:* cdktn.StringMap

---

##### `log_destination_type`<sup>Required</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs</a>

---


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_logging_configuration

dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs">log_destination_configs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_destination_configs`<sup>Required</sup> <a name="log_destination_configs" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs"></a>

```python
log_destination_configs: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---



