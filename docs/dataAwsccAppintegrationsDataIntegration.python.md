# `dataAwsccAppintegrationsDataIntegration` Submodule <a name="`dataAwsccAppintegrationsDataIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppintegrationsDataIntegration <a name="DataAwsccAppintegrationsDataIntegration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration awscc_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration#id DataAwsccAppintegrationsDataIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppintegrationsDataIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationArn">data_integration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationId">data_integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fileConfiguration">file_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference">DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.objectConfiguration">object_configuration</a></code> | <code>cdktn.AnyMapMap</code> | Terraform type: `map(map(list(string)))`. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference">DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.sourceUri">source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList">DataAwsccAppintegrationsDataIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_integration_arn`<sup>Required</sup> <a name="data_integration_arn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationArn"></a>

```python
data_integration_arn: str
```

- *Type:* str

---

##### `data_integration_id`<sup>Required</sup> <a name="data_integration_id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationId"></a>

```python
data_integration_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `file_configuration`<sup>Required</sup> <a name="file_configuration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fileConfiguration"></a>

```python
file_configuration: DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference">DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference</a>

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_configuration`<sup>Required</sup> <a name="object_configuration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.objectConfiguration"></a>

```python
object_configuration: AnyMapMap
```

- *Type:* cdktn.AnyMapMap

Terraform type: `map(map(list(string)))`.

This nesting is deeper than the typed wrapper classes in the core cdktn package; it is exposed as `AnyMapMap` and values below that boundary are untyped tokens.

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.scheduleConfig"></a>

```python
schedule_config: DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference">DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tags"></a>

```python
tags: DataAwsccAppintegrationsDataIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList">DataAwsccAppintegrationsDataIntegrationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppintegrationsDataIntegrationConfig <a name="DataAwsccAppintegrationsDataIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration#id DataAwsccAppintegrationsDataIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppintegrationsDataIntegrationFileConfiguration <a name="DataAwsccAppintegrationsDataIntegrationFileConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration()
```


### DataAwsccAppintegrationsDataIntegrationScheduleConfig <a name="DataAwsccAppintegrationsDataIntegrationScheduleConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig()
```


### DataAwsccAppintegrationsDataIntegrationTags <a name="DataAwsccAppintegrationsDataIntegrationTags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference <a name="DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters">filters</a></code> | <code>cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders">folders</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration">DataAwsccAppintegrationsDataIntegrationFileConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters"></a>

```python
filters: StringListMap
```

- *Type:* cdktn.StringListMap

---

##### `folders`<sup>Required</sup> <a name="folders" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders"></a>

```python
folders: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppintegrationsDataIntegrationFileConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration">DataAwsccAppintegrationsDataIntegrationFileConfiguration</a>

---


### DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference <a name="DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">first_execution_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig">DataAwsccAppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```python
first_execution_from: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig">DataAwsccAppintegrationsDataIntegrationScheduleConfig</a>

---


### DataAwsccAppintegrationsDataIntegrationTagsList <a name="DataAwsccAppintegrationsDataIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppintegrationsDataIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppintegrationsDataIntegrationTagsOutputReference <a name="DataAwsccAppintegrationsDataIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appintegrations_data_integration

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags">DataAwsccAppintegrationsDataIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppintegrationsDataIntegrationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags">DataAwsccAppintegrationsDataIntegrationTags</a>

---



