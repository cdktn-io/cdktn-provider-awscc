# `dataAwsccCustomerprofilesRecommender` Submodule <a name="`dataAwsccCustomerprofilesRecommender` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesRecommender <a name="DataAwsccCustomerprofilesRecommender" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_recommender awscc_customerprofiles_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_recommender#id DataAwsccCustomerprofilesRecommender#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCustomerprofilesRecommender to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCustomerprofilesRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.latestRecommenderUpdate">latest_recommender_update</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderArn">recommender_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference">DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderName">recommender_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderRecipeName">recommender_recipe_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList">DataAwsccCustomerprofilesRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.trainingMetrics">training_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList">DataAwsccCustomerprofilesRecommenderTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `latest_recommender_update`<sup>Required</sup> <a name="latest_recommender_update" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.latestRecommenderUpdate"></a>

```python
latest_recommender_update: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a>

---

##### `recommender_arn`<sup>Required</sup> <a name="recommender_arn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderArn"></a>

```python
recommender_arn: str
```

- *Type:* str

---

##### `recommender_config`<sup>Required</sup> <a name="recommender_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderConfig"></a>

```python
recommender_config: DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference">DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference</a>

---

##### `recommender_name`<sup>Required</sup> <a name="recommender_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderName"></a>

```python
recommender_name: str
```

- *Type:* str

---

##### `recommender_recipe_name`<sup>Required</sup> <a name="recommender_recipe_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.recommenderRecipeName"></a>

```python
recommender_recipe_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.tags"></a>

```python
tags: DataAwsccCustomerprofilesRecommenderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList">DataAwsccCustomerprofilesRecommenderTagsList</a>

---

##### `training_metrics`<sup>Required</sup> <a name="training_metrics" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.trainingMetrics"></a>

```python
training_metrics: DataAwsccCustomerprofilesRecommenderTrainingMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList">DataAwsccCustomerprofilesRecommenderTrainingMetricsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommender.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesRecommenderConfig <a name="DataAwsccCustomerprofilesRecommenderConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_recommender#id DataAwsccCustomerprofilesRecommender#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate()
```


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig()
```


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig()
```


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct()
```


### DataAwsccCustomerprofilesRecommenderRecommenderConfig <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfig()
```


### DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig()
```


### DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct()
```


### DataAwsccCustomerprofilesRecommenderTags <a name="DataAwsccCustomerprofilesRecommenderTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTags()
```


### DataAwsccCustomerprofilesRecommenderTrainingMetrics <a name="DataAwsccCustomerprofilesRecommenderTrainingMetrics" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetrics()
```


### DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics <a name="DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime">creation_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime">last_updated_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_date_time`<sup>Required</sup> <a name="creation_date_time" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime"></a>

```python
creation_date_time: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `last_updated_date_time`<sup>Required</sup> <a name="last_updated_date_time" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime"></a>

```python
last_updated_date_time: str
```

- *Type:* str

---

##### `recommender_config`<sup>Required</sup> <a name="recommender_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig"></a>

```python
recommender_config: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdate</a>

---


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">event_value_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_value_threshold`<sup>Required</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```python
event_value_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList">event_parameters_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_parameters_list`<sup>Required</sup> <a name="event_parameters_list" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```python
event_parameters_list: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a>

---


### DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference <a name="DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig">events_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_config`<sup>Required</sup> <a name="events_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig"></a>

```python
events_config: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">DataAwsccCustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a>

---


### DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">event_value_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_value_threshold`<sup>Required</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```python
event_value_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList">event_parameters_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_parameters_list`<sup>Required</sup> <a name="event_parameters_list" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```python
event_parameters_list: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---


### DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference <a name="DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig">events_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfig">DataAwsccCustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_config`<sup>Required</sup> <a name="events_config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig"></a>

```python
events_config: DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">DataAwsccCustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderRecommenderConfig">DataAwsccCustomerprofilesRecommenderRecommenderConfig</a>

---


### DataAwsccCustomerprofilesRecommenderTagsList <a name="DataAwsccCustomerprofilesRecommenderTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesRecommenderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesRecommenderTagsOutputReference <a name="DataAwsccCustomerprofilesRecommenderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTags">DataAwsccCustomerprofilesRecommenderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTags">DataAwsccCustomerprofilesRecommenderTags</a>

---


### DataAwsccCustomerprofilesRecommenderTrainingMetricsList <a name="DataAwsccCustomerprofilesRecommenderTrainingMetricsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference <a name="DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage">coverage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness">freshness</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit">hit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity">popularity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity">similarity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics">DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coverage`<sup>Required</sup> <a name="coverage" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage"></a>

```python
coverage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness"></a>

```python
freshness: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hit`<sup>Required</sup> <a name="hit" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit"></a>

```python
hit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `popularity`<sup>Required</sup> <a name="popularity" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity"></a>

```python
popularity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `similarity`<sup>Required</sup> <a name="similarity" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity"></a>

```python
similarity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics">DataAwsccCustomerprofilesRecommenderTrainingMetricsMetrics</a>

---


### DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference <a name="DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_customerprofiles_recommender

dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetrics">DataAwsccCustomerprofilesRecommenderTrainingMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics"></a>

```python
metrics: DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">DataAwsccCustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCustomerprofilesRecommenderTrainingMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesRecommender.DataAwsccCustomerprofilesRecommenderTrainingMetrics">DataAwsccCustomerprofilesRecommenderTrainingMetrics</a>

---



