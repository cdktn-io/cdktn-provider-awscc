# `dataAwsccVerifiedpermissionsPolicyStore` Submodule <a name="`dataAwsccVerifiedpermissionsPolicyStore` Submodule" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVerifiedpermissionsPolicyStore <a name="DataAwsccVerifiedpermissionsPolicyStore" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsccVerifiedpermissionsPolicyStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccVerifiedpermissionsPolicyStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccVerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.deletionProtection">deletion_protection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionSettings">encryption_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionState">encryption_state</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference">DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList">DataAwsccVerifiedpermissionsPolicyStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.validationSettings">validation_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.deletionProtection"></a>

```python
deletion_protection: DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encryption_settings`<sup>Required</sup> <a name="encryption_settings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionSettings"></a>

```python
encryption_settings: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a>

---

##### `encryption_state`<sup>Required</sup> <a name="encryption_state" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionState"></a>

```python
encryption_state: DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a>

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.schema"></a>

```python
schema: DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference">DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tags"></a>

```python
tags: DataAwsccVerifiedpermissionsPolicyStoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList">DataAwsccVerifiedpermissionsPolicyStoreTagsList</a>

---

##### `validation_settings`<sup>Required</sup> <a name="validation_settings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.validationSettings"></a>

```python
validation_settings: DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVerifiedpermissionsPolicyStoreConfig <a name="DataAwsccVerifiedpermissionsPolicyStoreConfig" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsccVerifiedpermissionsPolicyStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection <a name="DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection()
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings()
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings()
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionState <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionState" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState()
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState()
```


### DataAwsccVerifiedpermissionsPolicyStoreSchema <a name="DataAwsccVerifiedpermissionsPolicyStoreSchema" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema()
```


### DataAwsccVerifiedpermissionsPolicyStoreTags <a name="DataAwsccVerifiedpermissionsPolicyStoreTags" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags()
```


### DataAwsccVerifiedpermissionsPolicyStoreValidationSettings <a name="DataAwsccVerifiedpermissionsPolicyStoreValidationSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext">encryption_context</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_context`<sup>Required</sup> <a name="encryption_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext"></a>

```python
encryption_context: StringMap
```

- *Type:* cdktn.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings">kms_encryption_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `kms_encryption_settings`<sup>Required</sup> <a name="kms_encryption_settings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings"></a>

```python
kms_encryption_settings: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext">encryption_context</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_context`<sup>Required</sup> <a name="encryption_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext"></a>

```python
encryption_context: StringMap
```

- *Type:* cdktn.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState">kms_encryption_state</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `kms_encryption_state`<sup>Required</sup> <a name="kms_encryption_state" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState"></a>

```python
kms_encryption_state: DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionState
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionState</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson">cedar_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema">DataAwsccVerifiedpermissionsPolicyStoreSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cedar_json`<sup>Required</sup> <a name="cedar_json" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson"></a>

```python
cedar_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema">DataAwsccVerifiedpermissionsPolicyStoreSchema</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreTagsList <a name="DataAwsccVerifiedpermissionsPolicyStoreTagsList" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags">DataAwsccVerifiedpermissionsPolicyStoreTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags">DataAwsccVerifiedpermissionsPolicyStoreTags</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy_store

dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings">DataAwsccVerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyStoreValidationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings">DataAwsccVerifiedpermissionsPolicyStoreValidationSettings</a>

---



