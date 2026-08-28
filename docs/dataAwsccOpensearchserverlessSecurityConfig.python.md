# `dataAwsccOpensearchserverlessSecurityConfig` Submodule <a name="`dataAwsccOpensearchserverlessSecurityConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserverlessSecurityConfig <a name="DataAwsccOpensearchserverlessSecurityConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_security_config awscc_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_security_config#id DataAwsccOpensearchserverlessSecurityConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOpensearchserverlessSecurityConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.securityConfigId">security_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `iam_federation_options`<sup>Required</sup> <a name="iam_federation_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamFederationOptions"></a>

```python
iam_federation_options: DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a>

---

##### `iam_identity_center_options`<sup>Required</sup> <a name="iam_identity_center_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.samlOptions"></a>

```python
saml_options: DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `security_config_id`<sup>Required</sup> <a name="security_config_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.securityConfigId"></a>

```python
security_config_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserverlessSecurityConfigConfig <a name="DataAwsccOpensearchserverlessSecurityConfigConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/opensearchserverless_security_config#id DataAwsccOpensearchserverlessSecurityConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions <a name="DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions()
```


### DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions <a name="DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions()
```


### DataAwsccOpensearchserverlessSecurityConfigSamlOptions <a name="DataAwsccOpensearchserverlessSecurityConfigSamlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference <a name="DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions</a>

---


### DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference <a name="DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription">application_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `application_description`<sup>Required</sup> <a name="application_description" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription"></a>

```python
application_description: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---


### DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchserverless_security_config

dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId">open_search_serverless_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions">DataAwsccOpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `open_search_serverless_entity_id`<sup>Required</sup> <a name="open_search_serverless_entity_id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId"></a>

```python
open_search_serverless_entity_id: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchserverlessSecurityConfigSamlOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions">DataAwsccOpensearchserverlessSecurityConfigSamlOptions</a>

---



