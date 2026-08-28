# `dataAwsccGlueIntegrationResourceProperty` Submodule <a name="`dataAwsccGlueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueIntegrationResourceProperty <a name="DataAwsccGlueIntegrationResourceProperty" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_integration_resource_property#id DataAwsccGlueIntegrationResourceProperty#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueIntegrationResourceProperty to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourcePropertyArn">resource_property_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.sourceProcessingProperties">source_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList">DataAwsccGlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.targetProcessingProperties">target_processing_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_property_arn`<sup>Required</sup> <a name="resource_property_arn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```python
resource_property_arn: str
```

- *Type:* str

---

##### `source_processing_properties`<sup>Required</sup> <a name="source_processing_properties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```python
source_processing_properties: DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tags"></a>

```python
tags: DataAwsccGlueIntegrationResourcePropertyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList">DataAwsccGlueIntegrationResourcePropertyTagsList</a>

---

##### `target_processing_properties`<sup>Required</sup> <a name="target_processing_properties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```python
target_processing_properties: DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueIntegrationResourcePropertyConfig <a name="DataAwsccGlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_integration_resource_property#id DataAwsccGlueIntegrationResourceProperty#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties <a name="DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties()
```


### DataAwsccGlueIntegrationResourcePropertyTags <a name="DataAwsccGlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags()
```


### DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties <a name="DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties">DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties">DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### DataAwsccGlueIntegrationResourcePropertyTagsList <a name="DataAwsccGlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueIntegrationResourcePropertyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueIntegrationResourcePropertyTagsOutputReference <a name="DataAwsccGlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags">DataAwsccGlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueIntegrationResourcePropertyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags">DataAwsccGlueIntegrationResourcePropertyTags</a>

---


### DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_integration_resource_property

dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties">DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties">DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



