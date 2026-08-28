# `dataAwsccSesMailManagerTrafficPolicy` Submodule <a name="`dataAwsccSesMailManagerTrafficPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesMailManagerTrafficPolicy <a name="DataAwsccSesMailManagerTrafficPolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_traffic_policy#id DataAwsccSesMailManagerTrafficPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSesMailManagerTrafficPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSesMailManagerTrafficPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesMailManagerTrafficPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.maxMessageSizeBytes">max_message_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.policyStatements">policy_statements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList">DataAwsccSesMailManagerTrafficPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyArn">traffic_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyName">traffic_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `max_message_size_bytes`<sup>Required</sup> <a name="max_message_size_bytes" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.maxMessageSizeBytes"></a>

```python
max_message_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_statements`<sup>Required</sup> <a name="policy_statements" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.policyStatements"></a>

```python
policy_statements: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tags"></a>

```python
tags: DataAwsccSesMailManagerTrafficPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList">DataAwsccSesMailManagerTrafficPolicyTagsList</a>

---

##### `traffic_policy_arn`<sup>Required</sup> <a name="traffic_policy_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyArn"></a>

```python
traffic_policy_arn: str
```

- *Type:* str

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

---

##### `traffic_policy_name`<sup>Required</sup> <a name="traffic_policy_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.trafficPolicyName"></a>

```python
traffic_policy_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesMailManagerTrafficPolicyConfig <a name="DataAwsccSesMailManagerTrafficPolicyConfig" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_traffic_policy#id DataAwsccSesMailManagerTrafficPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesMailManagerTrafficPolicyPolicyStatements <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatements" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression()
```


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate()
```


### DataAwsccSesMailManagerTrafficPolicyTags <a name="DataAwsccSesMailManagerTrafficPolicyTags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">address_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_lists`<sup>Required</sup> <a name="address_lists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```python
address_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">is_in_address_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `is_in_address_list`<sup>Required</sup> <a name="is_in_address_list" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```python
is_in_address_list: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression">boolean_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression">ip_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression">ipv6_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression">string_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression">tls_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_expression`<sup>Required</sup> <a name="boolean_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression"></a>

```python
boolean_expression: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a>

---

##### `ip_expression`<sup>Required</sup> <a name="ip_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression"></a>

```python
ip_expression: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a>

---

##### `ipv6_expression`<sup>Required</sup> <a name="ipv6_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression"></a>

```python
ipv6_expression: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a>

---

##### `string_expression`<sup>Required</sup> <a name="string_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression"></a>

```python
string_expression: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a>

---

##### `tls_expression`<sup>Required</sup> <a name="tls_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression"></a>

```python
tls_expression: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements">DataAwsccSesMailManagerTrafficPolicyPolicyStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions"></a>

```python
conditions: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList">DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyPolicyStatements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyPolicyStatements">DataAwsccSesMailManagerTrafficPolicyPolicyStatements</a>

---


### DataAwsccSesMailManagerTrafficPolicyTagsList <a name="DataAwsccSesMailManagerTrafficPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerTrafficPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerTrafficPolicyTagsOutputReference <a name="DataAwsccSesMailManagerTrafficPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_traffic_policy

dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags">DataAwsccSesMailManagerTrafficPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerTrafficPolicyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerTrafficPolicy.DataAwsccSesMailManagerTrafficPolicyTags">DataAwsccSesMailManagerTrafficPolicyTags</a>

---



