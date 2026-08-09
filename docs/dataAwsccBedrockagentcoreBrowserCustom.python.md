# `dataAwsccBedrockagentcoreBrowserCustom` Submodule <a name="`dataAwsccBedrockagentcoreBrowserCustom` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreBrowserCustom <a name="DataAwsccBedrockagentcoreBrowserCustom" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_browser_custom#id DataAwsccBedrockagentcoreBrowserCustom#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcoreBrowserCustom to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcoreBrowserCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_browser_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreBrowserCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserArn">browser_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserId">browser_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserSigning">browser_signing</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference">DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList">DataAwsccBedrockagentcoreBrowserCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.enterprisePolicies">enterprise_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.recordingConfig">recording_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `browser_arn`<sup>Required</sup> <a name="browser_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserArn"></a>

```python
browser_arn: str
```

- *Type:* str

---

##### `browser_id`<sup>Required</sup> <a name="browser_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserId"></a>

```python
browser_id: str
```

- *Type:* str

---

##### `browser_signing`<sup>Required</sup> <a name="browser_signing" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.browserSigning"></a>

```python
browser_signing: DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference">DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference</a>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.certificates"></a>

```python
certificates: DataAwsccBedrockagentcoreBrowserCustomCertificatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList">DataAwsccBedrockagentcoreBrowserCustomCertificatesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enterprise_policies`<sup>Required</sup> <a name="enterprise_policies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.enterprisePolicies"></a>

```python
enterprise_policies: DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList</a>

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.networkConfiguration"></a>

```python
network_configuration: DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a>

---

##### `recording_config`<sup>Required</sup> <a name="recording_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.recordingConfig"></a>

```python
recording_config: DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustom.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreBrowserCustomBrowserSigning <a name="DataAwsccBedrockagentcoreBrowserCustomBrowserSigning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning()
```


### DataAwsccBedrockagentcoreBrowserCustomCertificates <a name="DataAwsccBedrockagentcoreBrowserCustomCertificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates()
```


### DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation()
```


### DataAwsccBedrockagentcoreBrowserCustomConfig <a name="DataAwsccBedrockagentcoreBrowserCustomConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrockagentcore_browser_custom#id DataAwsccBedrockagentcoreBrowserCustom#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies()
```


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation()
```


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration()
```


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig()
```


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfig <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig()
```


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning">DataAwsccBedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomBrowserSigning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomBrowserSigning">DataAwsccBedrockagentcoreBrowserCustomBrowserSigning</a>

---


### DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---


### DataAwsccBedrockagentcoreBrowserCustomCertificatesList <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation">certificate_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates">DataAwsccBedrockagentcoreBrowserCustomCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_location`<sup>Required</sup> <a name="certificate_location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation"></a>

```python
certificate_location: DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomCertificates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomCertificates">DataAwsccBedrockagentcoreBrowserCustomCertificates</a>

---


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---


### DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies">DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location"></a>

```python
location: DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies">DataAwsccBedrockagentcoreBrowserCustomEnterprisePolicies</a>

---


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration">DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```python
vpc_config: DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration">DataAwsccBedrockagentcoreBrowserCustomNetworkConfiguration</a>

---


### DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig">DataAwsccBedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location"></a>

```python
s3_location: DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfig">DataAwsccBedrockagentcoreBrowserCustomRecordingConfig</a>

---


### DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference <a name="DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_browser_custom

dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreBrowserCustom.DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location">DataAwsccBedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---



