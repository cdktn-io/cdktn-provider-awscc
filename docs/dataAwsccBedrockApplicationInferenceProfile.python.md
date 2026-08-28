# `dataAwsccBedrockApplicationInferenceProfile` Submodule <a name="`dataAwsccBedrockApplicationInferenceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockApplicationInferenceProfile <a name="DataAwsccBedrockApplicationInferenceProfile" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile#id DataAwsccBedrockApplicationInferenceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockApplicationInferenceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockApplicationInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockApplicationInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileArn">inference_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileId">inference_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileIdentifier">inference_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileName">inference_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.models">models</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList">DataAwsccBedrockApplicationInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.modelSource">model_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference">DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList">DataAwsccBedrockApplicationInferenceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inference_profile_arn`<sup>Required</sup> <a name="inference_profile_arn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileArn"></a>

```python
inference_profile_arn: str
```

- *Type:* str

---

##### `inference_profile_id`<sup>Required</sup> <a name="inference_profile_id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileId"></a>

```python
inference_profile_id: str
```

- *Type:* str

---

##### `inference_profile_identifier`<sup>Required</sup> <a name="inference_profile_identifier" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileIdentifier"></a>

```python
inference_profile_identifier: str
```

- *Type:* str

---

##### `inference_profile_name`<sup>Required</sup> <a name="inference_profile_name" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.inferenceProfileName"></a>

```python
inference_profile_name: str
```

- *Type:* str

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.models"></a>

```python
models: DataAwsccBedrockApplicationInferenceProfileModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList">DataAwsccBedrockApplicationInferenceProfileModelsList</a>

---

##### `model_source`<sup>Required</sup> <a name="model_source" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.modelSource"></a>

```python
model_source: DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference">DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tags"></a>

```python
tags: DataAwsccBedrockApplicationInferenceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList">DataAwsccBedrockApplicationInferenceProfileTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockApplicationInferenceProfileConfig <a name="DataAwsccBedrockApplicationInferenceProfileConfig" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_application_inference_profile#id DataAwsccBedrockApplicationInferenceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockApplicationInferenceProfileModels <a name="DataAwsccBedrockApplicationInferenceProfileModels" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels()
```


### DataAwsccBedrockApplicationInferenceProfileModelSource <a name="DataAwsccBedrockApplicationInferenceProfileModelSource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource()
```


### DataAwsccBedrockApplicationInferenceProfileTags <a name="DataAwsccBedrockApplicationInferenceProfileTags" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockApplicationInferenceProfileModelsList <a name="DataAwsccBedrockApplicationInferenceProfileModelsList" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockApplicationInferenceProfileModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom">copy_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource">DataAwsccBedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_from`<sup>Required</sup> <a name="copy_from" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockApplicationInferenceProfileModelSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelSource">DataAwsccBedrockApplicationInferenceProfileModelSource</a>

---


### DataAwsccBedrockApplicationInferenceProfileModelsOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels">DataAwsccBedrockApplicationInferenceProfileModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModelsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockApplicationInferenceProfileModels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileModels">DataAwsccBedrockApplicationInferenceProfileModels</a>

---


### DataAwsccBedrockApplicationInferenceProfileTagsList <a name="DataAwsccBedrockApplicationInferenceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockApplicationInferenceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockApplicationInferenceProfileTagsOutputReference <a name="DataAwsccBedrockApplicationInferenceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrock_application_inference_profile

dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags">DataAwsccBedrockApplicationInferenceProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockApplicationInferenceProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockApplicationInferenceProfile.DataAwsccBedrockApplicationInferenceProfileTags">DataAwsccBedrockApplicationInferenceProfileTags</a>

---



