# `dataAwsccSecuritylakeSubscriberNotification` Submodule <a name="`dataAwsccSecuritylakeSubscriberNotification` Submodule" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecuritylakeSubscriberNotification <a name="DataAwsccSecuritylakeSubscriberNotification" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_subscriber_notification#id DataAwsccSecuritylakeSubscriberNotification#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecuritylakeSubscriberNotification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberArn">subscriber_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberEndpoint">subscriber_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `notification_configuration`<sup>Required</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.notificationConfiguration"></a>

```python
notification_configuration: DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a>

---

##### `subscriber_arn`<sup>Required</sup> <a name="subscriber_arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberArn"></a>

```python
subscriber_arn: str
```

- *Type:* str

---

##### `subscriber_endpoint`<sup>Required</sup> <a name="subscriber_endpoint" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.subscriberEndpoint"></a>

```python
subscriber_endpoint: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecuritylakeSubscriberNotificationConfig <a name="DataAwsccSecuritylakeSubscriberNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_subscriber_notification#id DataAwsccSecuritylakeSubscriberNotification#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration()
```


### DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">authorization_api_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">authorization_api_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_api_key_name`<sup>Required</sup> <a name="authorization_api_key_name" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```python
authorization_api_key_name: str
```

- *Type:* str

---

##### `authorization_api_key_value`<sup>Required</sup> <a name="authorization_api_key_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```python
authorization_api_key_value: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `target_role_arn`<sup>Required</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---


### DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference <a name="DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_subscriber_notification

dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">https_notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">sqs_notification_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `https_notification_configuration`<sup>Required</sup> <a name="https_notification_configuration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```python
https_notification_configuration: DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a>

---

##### `sqs_notification_configuration`<sup>Required</sup> <a name="sqs_notification_configuration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```python
sqs_notification_configuration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeSubscriberNotification.DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration">DataAwsccSecuritylakeSubscriberNotificationNotificationConfiguration</a>

---



