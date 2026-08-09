# `dataAwsccSesMailManagerRuleSet` Submodule <a name="`dataAwsccSesMailManagerRuleSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesMailManagerRuleSet <a name="DataAwsccSesMailManagerRuleSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_rule_set#id DataAwsccSesMailManagerRuleSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSesMailManagerRuleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSesMailManagerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesMailManagerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList">DataAwsccSesMailManagerRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetArn">rule_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetId">rule_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetName">rule_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList">DataAwsccSesMailManagerRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.rules"></a>

```python
rules: DataAwsccSesMailManagerRuleSetRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList">DataAwsccSesMailManagerRuleSetRulesList</a>

---

##### `rule_set_arn`<sup>Required</sup> <a name="rule_set_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetArn"></a>

```python
rule_set_arn: str
```

- *Type:* str

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetId"></a>

```python
rule_set_id: str
```

- *Type:* str

---

##### `rule_set_name`<sup>Required</sup> <a name="rule_set_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetName"></a>

```python
rule_set_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tags"></a>

```python
tags: DataAwsccSesMailManagerRuleSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList">DataAwsccSesMailManagerRuleSetTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesMailManagerRuleSetConfig <a name="DataAwsccSesMailManagerRuleSetConfig" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_rule_set#id DataAwsccSesMailManagerRuleSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesMailManagerRuleSetRules <a name="DataAwsccSesMailManagerRuleSetRules" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules()
```


### DataAwsccSesMailManagerRuleSetRulesActions <a name="DataAwsccSesMailManagerRuleSetRulesActions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions()
```


### DataAwsccSesMailManagerRuleSetRulesActionsAddHeader <a name="DataAwsccSesMailManagerRuleSetRulesActionsAddHeader" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader()
```


### DataAwsccSesMailManagerRuleSetRulesActionsArchive <a name="DataAwsccSesMailManagerRuleSetRulesActionsArchive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive()
```


### DataAwsccSesMailManagerRuleSetRulesActionsBounce <a name="DataAwsccSesMailManagerRuleSetRulesActionsBounce" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce()
```


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox()
```


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness()
```


### DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda <a name="DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda()
```


### DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns <a name="DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns()
```


### DataAwsccSesMailManagerRuleSetRulesActionsRelay <a name="DataAwsccSesMailManagerRuleSetRulesActionsRelay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay()
```


### DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient <a name="DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient()
```


### DataAwsccSesMailManagerRuleSetRulesActionsSend <a name="DataAwsccSesMailManagerRuleSetRulesActionsSend" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend()
```


### DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 <a name="DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3()
```


### DataAwsccSesMailManagerRuleSetRulesConditions <a name="DataAwsccSesMailManagerRuleSetRulesConditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerRuleSetRulesUnless <a name="DataAwsccSesMailManagerRuleSetRulesUnless" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate()
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis()
```


### DataAwsccSesMailManagerRuleSetTags <a name="DataAwsccSesMailManagerRuleSetTags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader">DataAwsccSesMailManagerRuleSetRulesActionsAddHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsAddHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader">DataAwsccSesMailManagerRuleSetRulesActionsAddHeader</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.targetArchive">target_archive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive">DataAwsccSesMailManagerRuleSetRulesActionsArchive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `target_archive`<sup>Required</sup> <a name="target_archive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.targetArchive"></a>

```python
target_archive: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsArchive
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive">DataAwsccSesMailManagerRuleSetRulesActionsArchive</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.diagnosticMessage">diagnostic_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.sender">sender</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.smtpReplyCode">smtp_reply_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce">DataAwsccSesMailManagerRuleSetRulesActionsBounce</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `diagnostic_message`<sup>Required</sup> <a name="diagnostic_message" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.diagnosticMessage"></a>

```python
diagnostic_message: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.sender"></a>

```python
sender: str
```

- *Type:* str

---

##### `smtp_reply_code`<sup>Required</sup> <a name="smtp_reply_code" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.smtpReplyCode"></a>

```python
smtp_reply_code: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsBounce
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce">DataAwsccSesMailManagerRuleSetRulesActionsBounce</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.mailboxArn">mailbox_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `mailbox_arn`<sup>Required</sup> <a name="mailbox_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.mailboxArn"></a>

```python
mailbox_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.retryTimeMinutes">retry_time_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `retry_time_minutes`<sup>Required</sup> <a name="retry_time_minutes" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.retryTimeMinutes"></a>

```python
retry_time_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsList <a name="DataAwsccSesMailManagerRuleSetRulesActionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerRuleSetRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerRuleSetRulesActionsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.addHeader">add_header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.archive">archive</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.bounce">bounce</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToMailbox">deliver_to_mailbox</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToQBusiness">deliver_to_q_business</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.drop">drop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.invokeLambda">invoke_lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.publishToSns">publish_to_sns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.relay">relay</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.replaceRecipient">replace_recipient</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.send">send</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.writeToS3">write_to_s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions">DataAwsccSesMailManagerRuleSetRulesActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_header`<sup>Required</sup> <a name="add_header" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.addHeader"></a>

```python
add_header: DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference</a>

---

##### `archive`<sup>Required</sup> <a name="archive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.archive"></a>

```python
archive: DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference</a>

---

##### `bounce`<sup>Required</sup> <a name="bounce" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.bounce"></a>

```python
bounce: DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference</a>

---

##### `deliver_to_mailbox`<sup>Required</sup> <a name="deliver_to_mailbox" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToMailbox"></a>

```python
deliver_to_mailbox: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference</a>

---

##### `deliver_to_q_business`<sup>Required</sup> <a name="deliver_to_q_business" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToQBusiness"></a>

```python
deliver_to_q_business: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference</a>

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.drop"></a>

```python
drop: str
```

- *Type:* str

---

##### `invoke_lambda`<sup>Required</sup> <a name="invoke_lambda" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.invokeLambda"></a>

```python
invoke_lambda: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference</a>

---

##### `publish_to_sns`<sup>Required</sup> <a name="publish_to_sns" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.publishToSns"></a>

```python
publish_to_sns: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference</a>

---

##### `relay`<sup>Required</sup> <a name="relay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.relay"></a>

```python
relay: DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference</a>

---

##### `replace_recipient`<sup>Required</sup> <a name="replace_recipient" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.replaceRecipient"></a>

```python
replace_recipient: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference</a>

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.send"></a>

```python
send: DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference</a>

---

##### `write_to_s3`<sup>Required</sup> <a name="write_to_s3" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.writeToS3"></a>

```python
write_to_s3: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions">DataAwsccSesMailManagerRuleSetRulesActions</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.payloadType">payload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `payload_type`<sup>Required</sup> <a name="payload_type" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.payloadType"></a>

```python
payload_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.mailFrom">mail_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.relay">relay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay">DataAwsccSesMailManagerRuleSetRulesActionsRelay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `mail_from`<sup>Required</sup> <a name="mail_from" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.mailFrom"></a>

```python
mail_from: str
```

- *Type:* str

---

##### `relay`<sup>Required</sup> <a name="relay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.relay"></a>

```python
relay: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsRelay
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay">DataAwsccSesMailManagerRuleSetRulesActionsRelay</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.replaceWith">replace_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.replaceWith"></a>

```python
replace_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend">DataAwsccSesMailManagerRuleSetRulesActionsSend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsSend
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend">DataAwsccSesMailManagerRuleSetRulesActionsSend</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.actionFailurePolicy">action_failure_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3SseKmsKeyId">s3_sse_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_failure_policy`<sup>Required</sup> <a name="action_failure_policy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.actionFailurePolicy"></a>

```python
action_failure_policy: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `s3_sse_kms_key_id`<sup>Required</sup> <a name="s3_sse_kms_key_id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3SseKmsKeyId"></a>

```python
s3_sse_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">address_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_lists`<sup>Required</sup> <a name="address_lists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```python
address_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">is_in_address_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `is_in_address_list`<sup>Required</sup> <a name="is_in_address_list" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```python
is_in_address_list: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsList <a name="DataAwsccSesMailManagerRuleSetRulesConditionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.booleanExpression">boolean_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.dmarcExpression">dmarc_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.ipExpression">ip_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.numberExpression">number_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.stringExpression">string_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.verdictExpression">verdict_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions">DataAwsccSesMailManagerRuleSetRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_expression`<sup>Required</sup> <a name="boolean_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.booleanExpression"></a>

```python
boolean_expression: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference</a>

---

##### `dmarc_expression`<sup>Required</sup> <a name="dmarc_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.dmarcExpression"></a>

```python
dmarc_expression: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference</a>

---

##### `ip_expression`<sup>Required</sup> <a name="ip_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.ipExpression"></a>

```python
ip_expression: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference</a>

---

##### `number_expression`<sup>Required</sup> <a name="number_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.numberExpression"></a>

```python
number_expression: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference</a>

---

##### `string_expression`<sup>Required</sup> <a name="string_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.stringExpression"></a>

```python
string_expression: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference</a>

---

##### `verdict_expression`<sup>Required</sup> <a name="verdict_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.verdictExpression"></a>

```python
verdict_expression: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions">DataAwsccSesMailManagerRuleSetRulesConditions</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.clientCertificateAttribute">client_certificate_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute">mime_header_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `client_certificate_attribute`<sup>Required</sup> <a name="client_certificate_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.clientCertificateAttribute"></a>

```python
client_certificate_attribute: str
```

- *Type:* str

---

##### `mime_header_attribute`<sup>Required</sup> <a name="mime_header_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute"></a>

```python
mime_header_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesList <a name="DataAwsccSesMailManagerRuleSetRulesList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerRuleSetRulesOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList">DataAwsccSesMailManagerRuleSetRulesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList">DataAwsccSesMailManagerRuleSetRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.unless">unless</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList">DataAwsccSesMailManagerRuleSetRulesUnlessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules">DataAwsccSesMailManagerRuleSetRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.actions"></a>

```python
actions: DataAwsccSesMailManagerRuleSetRulesActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList">DataAwsccSesMailManagerRuleSetRulesActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.conditions"></a>

```python
conditions: DataAwsccSesMailManagerRuleSetRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList">DataAwsccSesMailManagerRuleSetRulesConditionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unless`<sup>Required</sup> <a name="unless" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.unless"></a>

```python
unless: DataAwsccSesMailManagerRuleSetRulesUnlessList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList">DataAwsccSesMailManagerRuleSetRulesUnlessList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules">DataAwsccSesMailManagerRuleSetRules</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">address_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_lists`<sup>Required</sup> <a name="address_lists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```python
address_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.isInAddressList">is_in_address_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `is_in_address_list`<sup>Required</sup> <a name="is_in_address_list" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```python
is_in_address_list: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessList <a name="DataAwsccSesMailManagerRuleSetRulesUnlessList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.booleanExpression">boolean_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.dmarcExpression">dmarc_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.ipExpression">ip_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.numberExpression">number_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.stringExpression">string_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.verdictExpression">verdict_expression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless">DataAwsccSesMailManagerRuleSetRulesUnless</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_expression`<sup>Required</sup> <a name="boolean_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.booleanExpression"></a>

```python
boolean_expression: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference</a>

---

##### `dmarc_expression`<sup>Required</sup> <a name="dmarc_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.dmarcExpression"></a>

```python
dmarc_expression: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference</a>

---

##### `ip_expression`<sup>Required</sup> <a name="ip_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.ipExpression"></a>

```python
ip_expression: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference</a>

---

##### `number_expression`<sup>Required</sup> <a name="number_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.numberExpression"></a>

```python
number_expression: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference</a>

---

##### `string_expression`<sup>Required</sup> <a name="string_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.stringExpression"></a>

```python
string_expression: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference</a>

---

##### `verdict_expression`<sup>Required</sup> <a name="verdict_expression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.verdictExpression"></a>

```python
verdict_expression: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnless
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless">DataAwsccSesMailManagerRuleSetRulesUnless</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.clientCertificateAttribute">client_certificate_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute">mime_header_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `client_certificate_attribute`<sup>Required</sup> <a name="client_certificate_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.clientCertificateAttribute"></a>

```python
client_certificate_attribute: str
```

- *Type:* str

---

##### `mime_header_attribute`<sup>Required</sup> <a name="mime_header_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute"></a>

```python
mime_header_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.resultField">result_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```python
analyzer: str
```

- *Type:* str

---

##### `result_field`<sup>Required</sup> <a name="result_field" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```python
result_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.analysis"></a>

```python
analysis: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.evaluate"></a>

```python
evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression</a>

---


### DataAwsccSesMailManagerRuleSetTagsList <a name="DataAwsccSesMailManagerRuleSetTagsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSesMailManagerRuleSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSesMailManagerRuleSetTagsOutputReference <a name="DataAwsccSesMailManagerRuleSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ses_mail_manager_rule_set

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags">DataAwsccSesMailManagerRuleSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSesMailManagerRuleSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags">DataAwsccSesMailManagerRuleSetTags</a>

---



