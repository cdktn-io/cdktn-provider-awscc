# `dataAwsccCognitoUserPoolDomain` Submodule <a name="`dataAwsccCognitoUserPoolDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolDomain <a name="DataAwsccCognitoUserPoolDomain" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain awscc_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain#id DataAwsccCognitoUserPoolDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCognitoUserPoolDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cloudfrontDistribution">cloudfront_distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.customDomainConfig">custom_domain_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference">DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.managedLoginVersion">managed_login_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference">DataAwsccCognitoUserPoolDomainRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cloudfront_distribution`<sup>Required</sup> <a name="cloudfront_distribution" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```python
cloudfront_distribution: str
```

- *Type:* str

---

##### `custom_domain_config`<sup>Required</sup> <a name="custom_domain_config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.customDomainConfig"></a>

```python
custom_domain_config: DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference">DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `managed_login_version`<sup>Required</sup> <a name="managed_login_version" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.managedLoginVersion"></a>

```python
managed_login_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.routing"></a>

```python
routing: DataAwsccCognitoUserPoolDomainRoutingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference">DataAwsccCognitoUserPoolDomainRoutingOutputReference</a>

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolDomainConfig <a name="DataAwsccCognitoUserPoolDomainConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_domain#id DataAwsccCognitoUserPoolDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolDomainCustomDomainConfig <a name="DataAwsccCognitoUserPoolDomainCustomDomainConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig()
```


### DataAwsccCognitoUserPoolDomainRouting <a name="DataAwsccCognitoUserPoolDomainRouting" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting()
```


### DataAwsccCognitoUserPoolDomainRoutingFailover <a name="DataAwsccCognitoUserPoolDomainRoutingFailover" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference <a name="DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig">DataAwsccCognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolDomainCustomDomainConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainCustomDomainConfig">DataAwsccCognitoUserPoolDomainCustomDomainConfig</a>

---


### DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference <a name="DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId">primary_route53_health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion">secondary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover">DataAwsccCognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_route53_health_check_id`<sup>Required</sup> <a name="primary_route53_health_check_id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId"></a>

```python
primary_route53_health_check_id: str
```

- *Type:* str

---

##### `secondary_region`<sup>Required</sup> <a name="secondary_region" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion"></a>

```python
secondary_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolDomainRoutingFailover
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailover">DataAwsccCognitoUserPoolDomainRoutingFailover</a>

---


### DataAwsccCognitoUserPoolDomainRoutingOutputReference <a name="DataAwsccCognitoUserPoolDomainRoutingOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_user_pool_domain

dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference">DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting">DataAwsccCognitoUserPoolDomainRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.failover"></a>

```python
failover: DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference">DataAwsccCognitoUserPoolDomainRoutingFailoverOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRoutingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoUserPoolDomainRouting
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolDomain.DataAwsccCognitoUserPoolDomainRouting">DataAwsccCognitoUserPoolDomainRouting</a>

---



