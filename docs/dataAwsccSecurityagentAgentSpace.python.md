# `dataAwsccSecurityagentAgentSpace` Submodule <a name="`dataAwsccSecurityagentAgentSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentAgentSpace <a name="DataAwsccSecurityagentAgentSpace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_agent_space awscc_securityagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_agent_space#id DataAwsccSecurityagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityagentAgentSpace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources">aws_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings">code_review_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources">integrated_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds">target_domain_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

---

##### `aws_resources`<sup>Required</sup> <a name="aws_resources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources"></a>

```python
aws_resources: DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a>

---

##### `code_review_settings`<sup>Required</sup> <a name="code_review_settings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings"></a>

```python
code_review_settings: DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `integrated_resources`<sup>Required</sup> <a name="integrated_resources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources"></a>

```python
integrated_resources: DataAwsccSecurityagentAgentSpaceIntegratedResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags"></a>

```python
tags: DataAwsccSecurityagentAgentSpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a>

---

##### `target_domain_ids`<sup>Required</sup> <a name="target_domain_ids" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds"></a>

```python
target_domain_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentAgentSpaceAwsResources <a name="DataAwsccSecurityagentAgentSpaceAwsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources()
```


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs()
```


### DataAwsccSecurityagentAgentSpaceCodeReviewSettings <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings()
```


### DataAwsccSecurityagentAgentSpaceConfig <a name="DataAwsccSecurityagentAgentSpaceConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_agent_space#id DataAwsccSecurityagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentAgentSpaceIntegratedResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities()
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository()
```


### DataAwsccSecurityagentAgentSpaceTags <a name="DataAwsccSecurityagentAgentSpaceTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns">lambda_function_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups">log_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets">s3_buckets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns">secret_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs">vpcs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lambda_function_arns`<sup>Required</sup> <a name="lambda_function_arns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns"></a>

```python
lambda_function_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_groups`<sup>Required</sup> <a name="log_groups" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups"></a>

```python
log_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_buckets`<sup>Required</sup> <a name="s3_buckets" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets"></a>

```python
s3_buckets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_arns`<sup>Required</sup> <a name="secret_arns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns"></a>

```python
secret_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpcs`<sup>Required</sup> <a name="vpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs"></a>

```python
vpcs: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceAwsResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a>

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn">vpc_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn"></a>

```python
vpc_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a>

---


### DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning">controls_scanning</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning">general_purpose_scanning</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controls_scanning`<sup>Required</sup> <a name="controls_scanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning"></a>

```python
controls_scanning: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `general_purpose_scanning`<sup>Required</sup> <a name="general_purpose_scanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning"></a>

```python
general_purpose_scanning: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceCodeReviewSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration">integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources">provider_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration"></a>

```python
integration: str
```

- *Type:* str

---

##### `provider_resources`<sup>Required</sup> <a name="provider_resources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources"></a>

```python
provider_resources: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments">leave_comments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode">remediate_code</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `leave_comments`<sup>Required</sup> <a name="leave_comments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments"></a>

```python
leave_comments: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remediate_code`<sup>Required</sup> <a name="remediate_code" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode"></a>

```python
remediate_code: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument">create_document</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument">fetch_document</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument">update_document</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_document`<sup>Required</sup> <a name="create_document" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument"></a>

```python
create_document: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `fetch_document`<sup>Required</sup> <a name="fetch_document" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument"></a>

```python
fetch_document: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `update_document`<sup>Required</sup> <a name="update_document" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument"></a>

```python
update_document: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId">page_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey">space_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle">space_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

---

##### `space_key`<sup>Required</sup> <a name="space_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey"></a>

```python
space_key: str
```

- *Type:* str

---

##### `space_title`<sup>Required</sup> <a name="space_title" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle"></a>

```python
space_title: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments">leave_comments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode">remediate_code</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `leave_comments`<sup>Required</sup> <a name="leave_comments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments"></a>

```python
leave_comments: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remediate_code`<sup>Required</sup> <a name="remediate_code" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode"></a>

```python
remediate_code: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments">leave_comments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode">remediate_code</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `leave_comments`<sup>Required</sup> <a name="leave_comments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments"></a>

```python
leave_comments: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `remediate_code`<sup>Required</sup> <a name="remediate_code" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode"></a>

```python
remediate_code: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities">bitbucket_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository">bitbucket_repository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities">confluence_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument">confluence_document</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities">git_hub_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository">git_hub_repository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities">git_lab_capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository">git_lab_repository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitbucket_capabilities`<sup>Required</sup> <a name="bitbucket_capabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities"></a>

```python
bitbucket_capabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a>

---

##### `bitbucket_repository`<sup>Required</sup> <a name="bitbucket_repository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository"></a>

```python
bitbucket_repository: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a>

---

##### `confluence_capabilities`<sup>Required</sup> <a name="confluence_capabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities"></a>

```python
confluence_capabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a>

---

##### `confluence_document`<sup>Required</sup> <a name="confluence_document" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument"></a>

```python
confluence_document: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a>

---

##### `git_hub_capabilities`<sup>Required</sup> <a name="git_hub_capabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities"></a>

```python
git_hub_capabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a>

---

##### `git_hub_repository`<sup>Required</sup> <a name="git_hub_repository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository"></a>

```python
git_hub_repository: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a>

---

##### `git_lab_capabilities`<sup>Required</sup> <a name="git_lab_capabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities"></a>

```python
git_lab_capabilities: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a>

---

##### `git_lab_repository`<sup>Required</sup> <a name="git_lab_repository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository"></a>

```python
git_lab_repository: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a>

---


### DataAwsccSecurityagentAgentSpaceTagsList <a name="DataAwsccSecurityagentAgentSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentAgentSpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentAgentSpaceTagsOutputReference <a name="DataAwsccSecurityagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_agent_space

dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentAgentSpaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a>

---



