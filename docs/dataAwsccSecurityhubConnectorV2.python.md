# `dataAwsccSecurityhubConnectorV2` Submodule <a name="`dataAwsccSecurityhubConnectorV2` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubConnectorV2 <a name="DataAwsccSecurityhubConnectorV2" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2 awscc_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2#id DataAwsccSecurityhubConnectorV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecurityhubConnectorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorStatus">connector_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatus">enablement_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatusReason">enablement_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList">DataAwsccSecurityhubConnectorV2IssuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastCheckedAt">last_checked_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.providerName">provider_name</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `connector_status`<sup>Required</sup> <a name="connector_status" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorStatus"></a>

```python
connector_status: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enablement_status`<sup>Required</sup> <a name="enablement_status" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatus"></a>

```python
enablement_status: str
```

- *Type:* str

---

##### `enablement_status_reason`<sup>Required</sup> <a name="enablement_status_reason" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatusReason"></a>

```python
enablement_status_reason: str
```

- *Type:* str

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.issues"></a>

```python
issues: DataAwsccSecurityhubConnectorV2IssuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList">DataAwsccSecurityhubConnectorV2IssuesList</a>

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `last_checked_at`<sup>Required</sup> <a name="last_checked_at" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastCheckedAt"></a>

```python
last_checked_at: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.providerName"></a>

```python
provider_name: DataAwsccSecurityhubConnectorV2ProviderNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubConnectorV2Config <a name="DataAwsccSecurityhubConnectorV2Config" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2#id DataAwsccSecurityhubConnectorV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubConnectorV2Issues <a name="DataAwsccSecurityhubConnectorV2Issues" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues()
```


### DataAwsccSecurityhubConnectorV2ProviderName <a name="DataAwsccSecurityhubConnectorV2ProviderName" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName()
```


### DataAwsccSecurityhubConnectorV2ProviderNameAzure <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzure" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure()
```


### DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration()
```


### DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud <a name="DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud()
```


### DataAwsccSecurityhubConnectorV2ProviderNameServiceNow <a name="DataAwsccSecurityhubConnectorV2ProviderNameServiceNow" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubConnectorV2IssuesList <a name="DataAwsccSecurityhubConnectorV2IssuesList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecurityhubConnectorV2IssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecurityhubConnectorV2IssuesOutputReference <a name="DataAwsccSecurityhubConnectorV2IssuesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues">DataAwsccSecurityhubConnectorV2Issues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConnectorV2Issues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues">DataAwsccSecurityhubConnectorV2Issues</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn">aws_config_connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions">azure_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration">scope_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure">DataAwsccSecurityhubConnectorV2ProviderNameAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_config_connector_arn`<sup>Required</sup> <a name="aws_config_connector_arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn"></a>

```python
aws_config_connector_arn: str
```

- *Type:* str

---

##### `azure_regions`<sup>Required</sup> <a name="azure_regions" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions"></a>

```python
azure_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_configuration`<sup>Required</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration"></a>

```python
scope_configuration: DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConnectorV2ProviderNameAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure">DataAwsccSecurityhubConnectorV2ProviderNameAzure</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType">scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues">scope_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_type`<sup>Required</sup> <a name="scope_type" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType"></a>

```python
scope_type: str
```

- *Type:* str

---

##### `scope_values`<sup>Required</sup> <a name="scope_values" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues"></a>

```python
scope_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud">jira_cloud</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName">DataAwsccSecurityhubConnectorV2ProviderName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.azure"></a>

```python
azure: DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference</a>

---

##### `jira_cloud`<sup>Required</sup> <a name="jira_cloud" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud"></a>

```python
jira_cloud: DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow"></a>

```python
service_now: DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConnectorV2ProviderName
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName">DataAwsccSecurityhubConnectorV2ProviderName</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securityhub_connector_v2

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow">DataAwsccSecurityhubConnectorV2ProviderNameServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecurityhubConnectorV2ProviderNameServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow">DataAwsccSecurityhubConnectorV2ProviderNameServiceNow</a>

---



