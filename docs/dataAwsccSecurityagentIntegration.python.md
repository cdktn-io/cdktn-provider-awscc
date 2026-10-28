# `dataAwsccSecurityagentIntegration` Submodule <a name="`dataAwsccSecurityagentIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentIntegration <a name="DataAwsccSecurityagentIntegration" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration awscc_securityagent_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration#id DataAwsccSecurityagentIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityagentIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityagentIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityagentIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerInput">provider_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference">DataAwsccSecurityagentIntegrationProviderInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList">DataAwsccSecurityagentIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

---

##### `provider_input`<sup>Required</sup> <a name="provider_input" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerInput"></a>

```python
provider_input: DataAwsccSecurityagentIntegrationProviderInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference">DataAwsccSecurityagentIntegrationProviderInputOutputReference</a>

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tags"></a>

```python
tags: DataAwsccSecurityagentIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList">DataAwsccSecurityagentIntegrationTagsList</a>

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentIntegrationConfig <a name="DataAwsccSecurityagentIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/securityagent_integration#id DataAwsccSecurityagentIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentIntegrationProviderInput <a name="DataAwsccSecurityagentIntegrationProviderInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput()
```


### DataAwsccSecurityagentIntegrationProviderInputBitbucket <a name="DataAwsccSecurityagentIntegrationProviderInputBitbucket" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket()
```


### DataAwsccSecurityagentIntegrationProviderInputConfluence <a name="DataAwsccSecurityagentIntegrationProviderInputConfluence" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence()
```


### DataAwsccSecurityagentIntegrationProviderInputGithub <a name="DataAwsccSecurityagentIntegrationProviderInputGithub" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub()
```


### DataAwsccSecurityagentIntegrationProviderInputGitlab <a name="DataAwsccSecurityagentIntegrationProviderInputGitlab" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab()
```


### DataAwsccSecurityagentIntegrationTags <a name="DataAwsccSecurityagentIntegrationTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket">DataAwsccSecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentIntegrationProviderInputBitbucket
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucket">DataAwsccSecurityagentIntegrationProviderInputBitbucket</a>

---


### DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl">site_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence">DataAwsccSecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `site_url`<sup>Required</sup> <a name="site_url" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl"></a>

```python
site_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentIntegrationProviderInputConfluence
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluence">DataAwsccSecurityagentIntegrationProviderInputConfluence</a>

---


### DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub">DataAwsccSecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentIntegrationProviderInputGithub
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithub">DataAwsccSecurityagentIntegrationProviderInputGithub</a>

---


### DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab">DataAwsccSecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentIntegrationProviderInputGitlab
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlab">DataAwsccSecurityagentIntegrationProviderInputGitlab</a>

---


### DataAwsccSecurityagentIntegrationProviderInputOutputReference <a name="DataAwsccSecurityagentIntegrationProviderInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.bitbucket">bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference">DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.confluence">confluence</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference">DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference">DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.gitlab">gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference">DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput">DataAwsccSecurityagentIntegrationProviderInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitbucket`<sup>Required</sup> <a name="bitbucket" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.bitbucket"></a>

```python
bitbucket: DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference">DataAwsccSecurityagentIntegrationProviderInputBitbucketOutputReference</a>

---

##### `confluence`<sup>Required</sup> <a name="confluence" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.confluence"></a>

```python
confluence: DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference">DataAwsccSecurityagentIntegrationProviderInputConfluenceOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.github"></a>

```python
github: DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference">DataAwsccSecurityagentIntegrationProviderInputGithubOutputReference</a>

---

##### `gitlab`<sup>Required</sup> <a name="gitlab" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.gitlab"></a>

```python
gitlab: DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference">DataAwsccSecurityagentIntegrationProviderInputGitlabOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentIntegrationProviderInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationProviderInput">DataAwsccSecurityagentIntegrationProviderInput</a>

---


### DataAwsccSecurityagentIntegrationTagsList <a name="DataAwsccSecurityagentIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityagentIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityagentIntegrationTagsOutputReference <a name="DataAwsccSecurityagentIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityagent_integration

dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags">DataAwsccSecurityagentIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityagentIntegrationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentIntegration.DataAwsccSecurityagentIntegrationTags">DataAwsccSecurityagentIntegrationTags</a>

---



