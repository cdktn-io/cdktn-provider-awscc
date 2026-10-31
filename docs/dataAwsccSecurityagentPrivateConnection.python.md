# `dataAwsccSecurityagentPrivateConnection` Submodule <a name="`dataAwsccSecurityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentPrivateConnection <a name="DataAwsccSecurityagentPrivateConnection" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection#id DataAwsccSecurityagentPrivateConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityagentPrivateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificateExpiryTime">certificate_expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.hostAddress">host_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference">DataAwsccSecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceGatewayId">resource_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList">DataAwsccSecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_expiry_time`<sup>Required</sup> <a name="certificate_expiry_time" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```python
certificate_expiry_time: str
```

- *Type:* str

---

##### `dns_resolution`<sup>Required</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

---

##### `host_address`<sup>Required</sup> <a name="host_address" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.mode"></a>

```python
mode: DataAwsccSecurityagentPrivateConnectionModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference">DataAwsccSecurityagentPrivateConnectionModeOutputReference</a>

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

---

##### `resource_configuration_id`<sup>Required</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

---

##### `resource_gateway_id`<sup>Required</sup> <a name="resource_gateway_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceGatewayId"></a>

```python
resource_gateway_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tags"></a>

```python
tags: DataAwsccSecurityagentPrivateConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList">DataAwsccSecurityagentPrivateConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentPrivateConnectionConfig <a name="DataAwsccSecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection#id DataAwsccSecurityagentPrivateConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentPrivateConnectionMode <a name="DataAwsccSecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode()
```


### DataAwsccSecurityagentPrivateConnectionModeSelfManaged <a name="DataAwsccSecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged()
```


### DataAwsccSecurityagentPrivateConnectionModeServiceManaged <a name="DataAwsccSecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged()
```


### DataAwsccSecurityagentPrivateConnectionTags <a name="DataAwsccSecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentPrivateConnectionModeOutputReference <a name="DataAwsccSecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">service_managed</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode">DataAwsccSecurityagentPrivateConnectionMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```python
self_managed: DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `service_managed`<sup>Required</sup> <a name="service_managed" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```python
service_managed: DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentPrivateConnectionMode
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode">DataAwsccSecurityagentPrivateConnectionMode</a>

---


### DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged">DataAwsccSecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration_id`<sup>Required</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentPrivateConnectionModeSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged">DataAwsccSecurityagentPrivateConnectionModeSelfManaged</a>

---


### DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">dns_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">host_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4_addresses_per_eni</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged">DataAwsccSecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_resolution`<sup>Required</sup> <a name="dns_resolution" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```python
dns_resolution: str
```

- *Type:* str

---

##### `host_address`<sup>Required</sup> <a name="host_address" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```python
host_address: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ipv4_addresses_per_eni`<sup>Required</sup> <a name="ipv4_addresses_per_eni" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```python
ipv4_addresses_per_eni: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentPrivateConnectionModeServiceManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged">DataAwsccSecurityagentPrivateConnectionModeServiceManaged</a>

---


### DataAwsccSecurityagentPrivateConnectionTagsList <a name="DataAwsccSecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentPrivateConnectionTagsOutputReference <a name="DataAwsccSecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_private_connection

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags">DataAwsccSecurityagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentPrivateConnectionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags">DataAwsccSecurityagentPrivateConnectionTags</a>

---



