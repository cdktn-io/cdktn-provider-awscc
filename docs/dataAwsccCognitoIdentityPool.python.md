# `dataAwsccCognitoIdentityPool` Submodule <a name="`dataAwsccCognitoIdentityPool` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoIdentityPool <a name="DataAwsccCognitoIdentityPool" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_identity_pool awscc_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_identity_pool#id DataAwsccCognitoIdentityPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCognitoIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCognitoIdentityPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCognitoIdentityPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowClassicFlow">allow_classic_flow</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowUnauthenticatedIdentities">allow_unauthenticated_identities</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoEvents">cognito_events</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoIdentityProviders">cognito_identity_providers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoStreams">cognito_streams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference">DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.developerProviderName">developer_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolName">identity_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolTags">identity_pool_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList">DataAwsccCognitoIdentityPoolIdentityPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.openIdConnectProviderArNs">open_id_connect_provider_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.pushSync">push_sync</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference">DataAwsccCognitoIdentityPoolPushSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.samlProviderArNs">saml_provider_ar_ns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.supportedLoginProviders">supported_login_providers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allow_classic_flow`<sup>Required</sup> <a name="allow_classic_flow" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowClassicFlow"></a>

```python
allow_classic_flow: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `allow_unauthenticated_identities`<sup>Required</sup> <a name="allow_unauthenticated_identities" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```python
allow_unauthenticated_identities: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cognito_events`<sup>Required</sup> <a name="cognito_events" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoEvents"></a>

```python
cognito_events: str
```

- *Type:* str

---

##### `cognito_identity_providers`<sup>Required</sup> <a name="cognito_identity_providers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoIdentityProviders"></a>

```python
cognito_identity_providers: DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `cognito_streams`<sup>Required</sup> <a name="cognito_streams" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoStreams"></a>

```python
cognito_streams: DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference">DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference</a>

---

##### `developer_provider_name`<sup>Required</sup> <a name="developer_provider_name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.developerProviderName"></a>

```python
developer_provider_name: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `identity_pool_name`<sup>Required</sup> <a name="identity_pool_name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolName"></a>

```python
identity_pool_name: str
```

- *Type:* str

---

##### `identity_pool_tags`<sup>Required</sup> <a name="identity_pool_tags" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolTags"></a>

```python
identity_pool_tags: DataAwsccCognitoIdentityPoolIdentityPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList">DataAwsccCognitoIdentityPoolIdentityPoolTagsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_id_connect_provider_ar_ns`<sup>Required</sup> <a name="open_id_connect_provider_ar_ns" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.openIdConnectProviderArNs"></a>

```python
open_id_connect_provider_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `push_sync`<sup>Required</sup> <a name="push_sync" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.pushSync"></a>

```python
push_sync: DataAwsccCognitoIdentityPoolPushSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference">DataAwsccCognitoIdentityPoolPushSyncOutputReference</a>

---

##### `saml_provider_ar_ns`<sup>Required</sup> <a name="saml_provider_ar_ns" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.samlProviderArNs"></a>

```python
saml_provider_ar_ns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_login_providers`<sup>Required</sup> <a name="supported_login_providers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.supportedLoginProviders"></a>

```python
supported_login_providers: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoIdentityPoolCognitoIdentityProviders <a name="DataAwsccCognitoIdentityPoolCognitoIdentityProviders" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders()
```


### DataAwsccCognitoIdentityPoolCognitoStreams <a name="DataAwsccCognitoIdentityPoolCognitoStreams" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams()
```


### DataAwsccCognitoIdentityPoolConfig <a name="DataAwsccCognitoIdentityPoolConfig" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_identity_pool#id DataAwsccCognitoIdentityPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoIdentityPoolIdentityPoolTags <a name="DataAwsccCognitoIdentityPoolIdentityPoolTags" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags()
```


### DataAwsccCognitoIdentityPoolPushSync <a name="DataAwsccCognitoIdentityPoolPushSync" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList <a name="DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">server_side_token_check</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders">DataAwsccCognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `server_side_token_check`<sup>Required</sup> <a name="server_side_token_check" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```python
server_side_token_check: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoIdentityPoolCognitoIdentityProviders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders">DataAwsccCognitoIdentityPoolCognitoIdentityProviders</a>

---


### DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference <a name="DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus">streaming_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams">DataAwsccCognitoIdentityPoolCognitoStreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `streaming_status`<sup>Required</sup> <a name="streaming_status" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus"></a>

```python
streaming_status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoIdentityPoolCognitoStreams
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams">DataAwsccCognitoIdentityPoolCognitoStreams</a>

---


### DataAwsccCognitoIdentityPoolIdentityPoolTagsList <a name="DataAwsccCognitoIdentityPoolIdentityPoolTagsList" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference <a name="DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags">DataAwsccCognitoIdentityPoolIdentityPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoIdentityPoolIdentityPoolTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags">DataAwsccCognitoIdentityPoolIdentityPoolTags</a>

---


### DataAwsccCognitoIdentityPoolPushSyncOutputReference <a name="DataAwsccCognitoIdentityPoolPushSyncOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_identity_pool

dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.applicationArns">application_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync">DataAwsccCognitoIdentityPoolPushSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arns`<sup>Required</sup> <a name="application_arns" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.applicationArns"></a>

```python
application_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoIdentityPoolPushSync
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync">DataAwsccCognitoIdentityPoolPushSync</a>

---



