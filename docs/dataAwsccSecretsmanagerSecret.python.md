# `dataAwsccSecretsmanagerSecret` Submodule <a name="`dataAwsccSecretsmanagerSecret` Submodule" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecretsmanagerSecret <a name="DataAwsccSecretsmanagerSecret" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/secretsmanager_secret awscc_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/secretsmanager_secret#id DataAwsccSecretsmanagerSecret#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecretsmanagerSecret resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecretsmanagerSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecretsmanagerSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.generateSecretString">generate_secret_string</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference">DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.replicaRegions">replica_regions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList">DataAwsccSecretsmanagerSecretReplicaRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.secretString">secret_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList">DataAwsccSecretsmanagerSecretTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `generate_secret_string`<sup>Required</sup> <a name="generate_secret_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.generateSecretString"></a>

```python
generate_secret_string: DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference">DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replica_regions`<sup>Required</sup> <a name="replica_regions" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.replicaRegions"></a>

```python
replica_regions: DataAwsccSecretsmanagerSecretReplicaRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList">DataAwsccSecretsmanagerSecretReplicaRegionsList</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_string`<sup>Required</sup> <a name="secret_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.secretString"></a>

```python
secret_string: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.tags"></a>

```python
tags: DataAwsccSecretsmanagerSecretTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList">DataAwsccSecretsmanagerSecretTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecretsmanagerSecretConfig <a name="DataAwsccSecretsmanagerSecretConfig" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/secretsmanager_secret#id DataAwsccSecretsmanagerSecret#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecretsmanagerSecretGenerateSecretString <a name="DataAwsccSecretsmanagerSecretGenerateSecretString" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretString.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretString()
```


### DataAwsccSecretsmanagerSecretReplicaRegions <a name="DataAwsccSecretsmanagerSecretReplicaRegions" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegions()
```


### DataAwsccSecretsmanagerSecretTags <a name="DataAwsccSecretsmanagerSecretTags" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference <a name="DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters">exclude_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase">exclude_lowercase</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers">exclude_numbers</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation">exclude_punctuation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase">exclude_uppercase</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey">generate_string_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace">include_space</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType">require_each_included_type</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate">secret_string_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretString">DataAwsccSecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_characters`<sup>Required</sup> <a name="exclude_characters" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters"></a>

```python
exclude_characters: str
```

- *Type:* str

---

##### `exclude_lowercase`<sup>Required</sup> <a name="exclude_lowercase" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase"></a>

```python
exclude_lowercase: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exclude_numbers`<sup>Required</sup> <a name="exclude_numbers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers"></a>

```python
exclude_numbers: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exclude_punctuation`<sup>Required</sup> <a name="exclude_punctuation" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation"></a>

```python
exclude_punctuation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `exclude_uppercase`<sup>Required</sup> <a name="exclude_uppercase" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase"></a>

```python
exclude_uppercase: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `generate_string_key`<sup>Required</sup> <a name="generate_string_key" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey"></a>

```python
generate_string_key: str
```

- *Type:* str

---

##### `include_space`<sup>Required</sup> <a name="include_space" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace"></a>

```python
include_space: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `password_length`<sup>Required</sup> <a name="password_length" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_each_included_type`<sup>Required</sup> <a name="require_each_included_type" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType"></a>

```python
require_each_included_type: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `secret_string_template`<sup>Required</sup> <a name="secret_string_template" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate"></a>

```python
secret_string_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecretsmanagerSecretGenerateSecretString
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretGenerateSecretString">DataAwsccSecretsmanagerSecretGenerateSecretString</a>

---


### DataAwsccSecretsmanagerSecretReplicaRegionsList <a name="DataAwsccSecretsmanagerSecretReplicaRegionsList" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference <a name="DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegions">DataAwsccSecretsmanagerSecretReplicaRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecretsmanagerSecretReplicaRegions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretReplicaRegions">DataAwsccSecretsmanagerSecretReplicaRegions</a>

---


### DataAwsccSecretsmanagerSecretTagsList <a name="DataAwsccSecretsmanagerSecretTagsList" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecretsmanagerSecretTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecretsmanagerSecretTagsOutputReference <a name="DataAwsccSecretsmanagerSecretTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_secretsmanager_secret

dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTags">DataAwsccSecretsmanagerSecretTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecretsmanagerSecretTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecretsmanagerSecret.DataAwsccSecretsmanagerSecretTags">DataAwsccSecretsmanagerSecretTags</a>

---



