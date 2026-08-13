# `dataAwsccCertificatemanagerAcmeDomainValidation` Submodule <a name="`dataAwsccCertificatemanagerAcmeDomainValidation` Submodule" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCertificatemanagerAcmeDomainValidation <a name="DataAwsccCertificatemanagerAcmeDomainValidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation#id DataAwsccCertificatemanagerAcmeDomainValidation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCertificatemanagerAcmeDomainValidation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCertificatemanagerAcmeDomainValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCertificatemanagerAcmeDomainValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.acmeEndpointArn">acme_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.prevalidationOptions">prevalidation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList">DataAwsccCertificatemanagerAcmeDomainValidationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `acme_endpoint_arn`<sup>Required</sup> <a name="acme_endpoint_arn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.acmeEndpointArn"></a>

```python
acme_endpoint_arn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `prevalidation_options`<sup>Required</sup> <a name="prevalidation_options" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.prevalidationOptions"></a>

```python
prevalidation_options: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tags"></a>

```python
tags: DataAwsccCertificatemanagerAcmeDomainValidationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList">DataAwsccCertificatemanagerAcmeDomainValidationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCertificatemanagerAcmeDomainValidationConfig <a name="DataAwsccCertificatemanagerAcmeDomainValidationConfig" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation#id DataAwsccCertificatemanagerAcmeDomainValidation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions()
```


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation()
```


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope()
```


### DataAwsccCertificatemanagerAcmeDomainValidationTags <a name="DataAwsccCertificatemanagerAcmeDomainValidationTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain">exact_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains">subdomains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards">wildcards</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_domain`<sup>Required</sup> <a name="exact_domain" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain"></a>

```python
exact_domain: str
```

- *Type:* str

---

##### `subdomains`<sup>Required</sup> <a name="subdomains" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains"></a>

```python
subdomains: str
```

- *Type:* str

---

##### `wildcards`<sup>Required</sup> <a name="wildcards" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards"></a>

```python
wildcards: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope">domain_scope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_scope`<sup>Required</sup> <a name="domain_scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope"></a>

```python
domain_scope: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a>

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation">dns_prevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_prevalidation`<sup>Required</sup> <a name="dns_prevalidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation"></a>

```python
dns_prevalidation: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationTagsList <a name="DataAwsccCertificatemanagerAcmeDomainValidationTagsList" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_certificatemanager_acme_domain_validation

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags">DataAwsccCertificatemanagerAcmeDomainValidationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCertificatemanagerAcmeDomainValidationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags">DataAwsccCertificatemanagerAcmeDomainValidationTags</a>

---



