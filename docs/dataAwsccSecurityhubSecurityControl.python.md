# `dataAwsccSecurityhubSecurityControl` Submodule <a name="`dataAwsccSecurityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubSecurityControl <a name="DataAwsccSecurityhubSecurityControl" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_security_control#id DataAwsccSecurityhubSecurityControl#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityhubSecurityControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lastUpdateReason">last_update_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap">DataAwsccSecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlArn">security_control_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlId">security_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `last_update_reason`<sup>Required</sup> <a name="last_update_reason" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lastUpdateReason"></a>

```python
last_update_reason: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.parameters"></a>

```python
parameters: DataAwsccSecurityhubSecurityControlParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap">DataAwsccSecurityhubSecurityControlParametersMap</a>

---

##### `security_control_arn`<sup>Required</sup> <a name="security_control_arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlArn"></a>

```python
security_control_arn: str
```

- *Type:* str

---

##### `security_control_id`<sup>Required</sup> <a name="security_control_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlId"></a>

```python
security_control_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubSecurityControlConfig <a name="DataAwsccSecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securityhub_security_control#id DataAwsccSecurityhubSecurityControl#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubSecurityControlParameters <a name="DataAwsccSecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters()
```


### DataAwsccSecurityhubSecurityControlParametersValue <a name="DataAwsccSecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubSecurityControlParametersMap <a name="DataAwsccSecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccSecurityhubSecurityControlParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityhubSecurityControlParametersOutputReference <a name="DataAwsccSecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference">DataAwsccSecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters">DataAwsccSecurityhubSecurityControlParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.value"></a>

```python
value: DataAwsccSecurityhubSecurityControlParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference">DataAwsccSecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubSecurityControlParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters">DataAwsccSecurityhubSecurityControlParameters</a>

---


### DataAwsccSecurityhubSecurityControlParametersValueOutputReference <a name="DataAwsccSecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_security_control

dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.boolean">boolean</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.double">double</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enum">enum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enumList">enum_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integer">integer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integerList">integer_list</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.string">string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue">DataAwsccSecurityhubSecurityControlParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean`<sup>Required</sup> <a name="boolean" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```python
boolean: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `double`<sup>Required</sup> <a name="double" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```python
double: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```python
enum: str
```

- *Type:* str

---

##### `enum_list`<sup>Required</sup> <a name="enum_list" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```python
enum_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integer`<sup>Required</sup> <a name="integer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```python
integer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `integer_list`<sup>Required</sup> <a name="integer_list" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```python
integer_list: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```python
string: str
```

- *Type:* str

---

##### `string_list`<sup>Required</sup> <a name="string_list" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubSecurityControlParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue">DataAwsccSecurityhubSecurityControlParametersValue</a>

---



