# `dataAwsccCognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolRegionalConfigurationAttachment <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#id DataAwsccCognitoUserPoolRegionalConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">user_pool_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `email_configuration`<sup>Required</sup> <a name="email_configuration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```python
email_configuration: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```python
lambda_config: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `sms_configuration`<sup>Required</sup> <a name="sms_configuration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```python
sms_configuration: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `user_pool_tags`<sup>Required</sup> <a name="user_pool_tags" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```python
user_pool_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#id DataAwsccCognitoUserPoolRegionalConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration()
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">configuration_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">email_sending_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">reply_to_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_set`<sup>Required</sup> <a name="configuration_set" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

---

##### `email_sending_account`<sup>Required</sup> <a name="email_sending_account" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```python
email_sending_account: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `reply_to_email_address`<sup>Required</sup> <a name="reply_to_email_address" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```python
reply_to_email_address: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">create_auth_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">custom_email_sender</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">custom_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">custom_sms_sender</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">define_auth_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">inbound_federation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">post_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">post_confirmation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">pre_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">pre_sign_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">pre_token_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">pre_token_generation_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">user_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verify_auth_challenge_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_auth_challenge`<sup>Required</sup> <a name="create_auth_challenge" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```python
create_auth_challenge: str
```

- *Type:* str

---

##### `custom_email_sender`<sup>Required</sup> <a name="custom_email_sender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```python
custom_email_sender: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `custom_message`<sup>Required</sup> <a name="custom_message" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```python
custom_message: str
```

- *Type:* str

---

##### `custom_sms_sender`<sup>Required</sup> <a name="custom_sms_sender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```python
custom_sms_sender: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `define_auth_challenge`<sup>Required</sup> <a name="define_auth_challenge" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```python
define_auth_challenge: str
```

- *Type:* str

---

##### `inbound_federation`<sup>Required</sup> <a name="inbound_federation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```python
inbound_federation: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `post_authentication`<sup>Required</sup> <a name="post_authentication" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```python
post_authentication: str
```

- *Type:* str

---

##### `post_confirmation`<sup>Required</sup> <a name="post_confirmation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```python
post_confirmation: str
```

- *Type:* str

---

##### `pre_authentication`<sup>Required</sup> <a name="pre_authentication" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```python
pre_authentication: str
```

- *Type:* str

---

##### `pre_sign_up`<sup>Required</sup> <a name="pre_sign_up" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```python
pre_sign_up: str
```

- *Type:* str

---

##### `pre_token_generation`<sup>Required</sup> <a name="pre_token_generation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```python
pre_token_generation: str
```

- *Type:* str

---

##### `pre_token_generation_config`<sup>Required</sup> <a name="pre_token_generation_config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```python
pre_token_generation_config: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `user_migration`<sup>Required</sup> <a name="user_migration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```python
user_migration: str
```

- *Type:* str

---

##### `verify_auth_challenge_response`<sup>Required</sup> <a name="verify_auth_challenge_response" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```python
verify_auth_challenge_response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">caller_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">in_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">in_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">origination_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caller_arn`<sup>Required</sup> <a name="caller_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```python
caller_arn: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `in_entity_id`<sup>Required</sup> <a name="in_entity_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```python
in_entity_id: str
```

- *Type:* str

---

##### `in_template_id`<sup>Required</sup> <a name="in_template_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```python
in_template_id: str
```

- *Type:* str

---

##### `origination_identity`<sup>Required</sup> <a name="origination_identity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```python
origination_identity: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_regional_configuration_attachment

dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">eums_sms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">sns_caller_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">sns_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eums_sms`<sup>Required</sup> <a name="eums_sms" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```python
eums_sms: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `sns_caller_arn`<sup>Required</sup> <a name="sns_caller_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```python
sns_caller_arn: str
```

- *Type:* str

---

##### `sns_region`<sup>Required</sup> <a name="sns_region" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```python
sns_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---



