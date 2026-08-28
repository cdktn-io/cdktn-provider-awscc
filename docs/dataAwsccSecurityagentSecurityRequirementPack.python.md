# `dataAwsccSecurityagentSecurityRequirementPack` Submodule <a name="`dataAwsccSecurityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentSecurityRequirementPack <a name="DataAwsccSecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_security_requirement_pack#id DataAwsccSecurityagentSecurityRequirementPack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityagentSecurityRequirementPack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.packId">pack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.securityRequirements">security_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList">DataAwsccSecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pack_id`<sup>Required</sup> <a name="pack_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.packId"></a>

```python
pack_id: str
```

- *Type:* str

---

##### `security_requirements`<sup>Required</sup> <a name="security_requirements" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```python
security_requirements: DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tags"></a>

```python
tags: DataAwsccSecurityagentSecurityRequirementPackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList">DataAwsccSecurityagentSecurityRequirementPackTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentSecurityRequirementPackConfig <a name="DataAwsccSecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_security_requirement_pack#id DataAwsccSecurityagentSecurityRequirementPack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements()
```


### DataAwsccSecurityagentSecurityRequirementPackTags <a name="DataAwsccSecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">evaluation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```python
evaluation: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### DataAwsccSecurityagentSecurityRequirementPackTagsList <a name="DataAwsccSecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference <a name="DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_security_requirement_pack

dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags">DataAwsccSecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentSecurityRequirementPackTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags">DataAwsccSecurityagentSecurityRequirementPackTags</a>

---



