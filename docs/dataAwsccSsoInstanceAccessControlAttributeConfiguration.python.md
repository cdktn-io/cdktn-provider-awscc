# `dataAwsccSsoInstanceAccessControlAttributeConfiguration` Submodule <a name="`dataAwsccSsoInstanceAccessControlAttributeConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsoInstanceAccessControlAttributeConfiguration <a name="DataAwsccSsoInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration#id DataAwsccSsoInstanceAccessControlAttributeConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSsoInstanceAccessControlAttributeConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSsoInstanceAccessControlAttributeConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsoInstanceAccessControlAttributeConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">access_control_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration">instance_access_control_attribute_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_control_attributes`<sup>Required</sup> <a name="access_control_attributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```python
access_control_attributes: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `instance_access_control_attribute_configuration`<sup>Required</sup> <a name="instance_access_control_attribute_configuration" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration"></a>

```python
instance_access_control_attribute_configuration: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a>

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes()
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue()
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/sso_instance_access_control_attribute_configuration#id DataAwsccSsoInstanceAccessControlAttributeConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration()
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes()
```


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```python
value: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">source</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```python
source: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```python
value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">source</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```python
source: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---


### DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference <a name="DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sso_instance_access_control_attribute_configuration

dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes">access_control_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_attributes`<sup>Required</sup> <a name="access_control_attributes" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes"></a>

```python
access_control_attributes: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoInstanceAccessControlAttributeConfiguration.DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---



