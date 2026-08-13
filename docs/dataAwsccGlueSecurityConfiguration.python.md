# `dataAwsccGlueSecurityConfiguration` Submodule <a name="`dataAwsccGlueSecurityConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueSecurityConfiguration <a name="DataAwsccGlueSecurityConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration awscc_glue_security_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#id DataAwsccGlueSecurityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueSecurityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueSecurityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueSecurityConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueSecurityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueSecurityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueSecurityConfigurationConfig <a name="DataAwsccGlueSecurityConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_security_configuration#id DataAwsccGlueSecurityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueSecurityConfigurationEncryptionConfiguration <a name="DataAwsccGlueSecurityConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration()
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption()
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption()
```


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode">cloudwatch_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_encryption_mode`<sup>Required</sup> <a name="cloudwatch_encryption_mode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode"></a>

```python
cloudwatch_encryption_mode: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode">job_bookmarks_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_bookmarks_encryption_mode`<sup>Required</sup> <a name="job_bookmarks_encryption_mode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode"></a>

```python
job_bookmarks_encryption_mode: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption">cloudwatch_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption">job_bookmarks_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions">s3_encryptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration">DataAwsccGlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_encryption`<sup>Required</sup> <a name="cloudwatch_encryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption"></a>

```python
cloudwatch_encryption: DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a>

---

##### `job_bookmarks_encryption`<sup>Required</sup> <a name="job_bookmarks_encryption" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption"></a>

```python
job_bookmarks_encryption: DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">DataAwsccGlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a>

---

##### `s3_encryptions`<sup>Required</sup> <a name="s3_encryptions" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions"></a>

```python
s3_encryptions: DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueSecurityConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfiguration">DataAwsccGlueSecurityConfigurationEncryptionConfiguration</a>

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference <a name="DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_security_configuration

dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode">s3_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `s3_encryption_mode`<sup>Required</sup> <a name="s3_encryption_mode" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode"></a>

```python
s3_encryption_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueSecurityConfiguration.DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions">DataAwsccGlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>

---



