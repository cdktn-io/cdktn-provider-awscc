# `dataAwsccBedrockagentcoreApiKeyCredentialProvider` Submodule <a name="`dataAwsccBedrockagentcoreApiKeyCredentialProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreApiKeyCredentialProvider <a name="DataAwsccBedrockagentcoreApiKeyCredentialProvider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_api_key_credential_provider awscc_bedrockagentcore_api_key_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_api_key_credential_provider#id DataAwsccBedrockagentcoreApiKeyCredentialProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreApiKeyCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcoreApiKeyCredentialProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcoreApiKeyCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreApiKeyCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn">api_key_secret_arn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig">api_key_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey">api_key_secret_json_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource">api_key_secret_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList">DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_key_secret_arn`<sup>Required</sup> <a name="api_key_secret_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn"></a>

```python
api_key_secret_arn: DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference</a>

---

##### `api_key_secret_config`<sup>Required</sup> <a name="api_key_secret_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretConfig"></a>

```python
api_key_secret_config: DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference</a>

---

##### `api_key_secret_json_key`<sup>Required</sup> <a name="api_key_secret_json_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretJsonKey"></a>

```python
api_key_secret_json_key: str
```

- *Type:* str

---

##### `api_key_secret_source`<sup>Required</sup> <a name="api_key_secret_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretSource"></a>

```python
api_key_secret_source: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.tags"></a>

```python
tags: DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList">DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn()
```


### DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig()
```


### DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_api_key_credential_provider#id DataAwsccBedrockagentcoreApiKeyCredentialProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreApiKeyCredentialProviderTags <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a>

---


### DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey">json_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_key`<sup>Required</sup> <a name="json_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.jsonKey"></a>

```python
json_key: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig">DataAwsccBedrockagentcoreApiKeyCredentialProviderApiKeySecretConfig</a>

---


### DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference <a name="DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_api_key_credential_provider

dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTags">DataAwsccBedrockagentcoreApiKeyCredentialProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreApiKeyCredentialProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreApiKeyCredentialProvider.DataAwsccBedrockagentcoreApiKeyCredentialProviderTags">DataAwsccBedrockagentcoreApiKeyCredentialProviderTags</a>

---



