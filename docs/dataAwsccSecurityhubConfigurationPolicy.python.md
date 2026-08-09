# `dataAwsccSecurityhubConfigurationPolicy` Submodule <a name="`dataAwsccSecurityhubConfigurationPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubConfigurationPolicy <a name="DataAwsccSecurityhubConfigurationPolicy" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_configuration_policy awscc_securityhub_configuration_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_configuration_policy#id DataAwsccSecurityhubConfigurationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityhubConfigurationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityhubConfigurationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubConfigurationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicy">configuration_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicyId">configuration_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.serviceEnabled">service_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration_policy`<sup>Required</sup> <a name="configuration_policy" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicy"></a>

```python
configuration_policy: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a>

---

##### `configuration_policy_id`<sup>Required</sup> <a name="configuration_policy_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.configurationPolicyId"></a>

```python
configuration_policy_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_enabled`<sup>Required</sup> <a name="service_enabled" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.serviceEnabled"></a>

```python
service_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubConfigurationPolicyConfig <a name="DataAwsccSecurityhubConfigurationPolicyConfig" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/securityhub_configuration_policy#id DataAwsccSecurityhubConfigurationPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy()
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub()
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration()
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters()
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters()
```


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub">security_hub</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_hub`<sup>Required</sup> <a name="security_hub" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub"></a>

```python
security_hub: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers">enabled_standard_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration">security_controls_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled">service_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_standard_identifiers`<sup>Required</sup> <a name="enabled_standard_identifiers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers"></a>

```python
enabled_standard_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_controls_configuration`<sup>Required</sup> <a name="security_controls_configuration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration"></a>

```python
security_controls_configuration: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a>

---

##### `service_enabled`<sup>Required</sup> <a name="service_enabled" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled"></a>

```python
service_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers">disabled_security_control_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers">enabled_security_control_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters">security_control_custom_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_security_control_identifiers`<sup>Required</sup> <a name="disabled_security_control_identifiers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers"></a>

```python
disabled_security_control_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_security_control_identifiers`<sup>Required</sup> <a name="enabled_security_control_identifiers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers"></a>

```python
enabled_security_control_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_control_custom_parameters`<sup>Required</sup> <a name="security_control_custom_parameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters"></a>

```python
security_control_custom_parameters: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters"></a>

```python
parameters: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a>

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value"></a>

```python
value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a>

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters</a>

---


### DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference <a name="DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_configuration_policy

dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean">boolean</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double">double</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum">enum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList">enum_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer">integer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList">integer_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string">string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean`<sup>Required</sup> <a name="boolean" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean"></a>

```python
boolean: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double"></a>

```python
double: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum"></a>

```python
enum: str
```

- *Type:* str

---

##### `enum_list`<sup>Required</sup> <a name="enum_list" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList"></a>

```python
enum_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integer`<sup>Required</sup> <a name="integer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer"></a>

```python
integer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integer_list`<sup>Required</sup> <a name="integer_list" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList"></a>

```python
integer_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string"></a>

```python
string: str
```

- *Type:* str

---

##### `string_list`<sup>Required</sup> <a name="string_list" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConfigurationPolicy.DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

---



