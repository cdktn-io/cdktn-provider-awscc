# `finspaceEnvironment` Submodule <a name="`finspaceEnvironment` Submodule" id="@cdktn/provider-awscc.finspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceEnvironment <a name="FinspaceEnvironment" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  data_bundles: typing.List[str] = None,
  description: str = None,
  federation_mode: str = None,
  federation_parameters: FinspaceEnvironmentFederationParameters = None,
  kms_key_id: str = None,
  superuser_parameters: FinspaceEnvironmentSuperuserParameters = None,
  tags: IResolvable | typing.List[FinspaceEnvironmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dataBundles">data_bundles</a></code> | <code>typing.List[str]</code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationMode">federation_mode</a></code> | <code>str</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationParameters">federation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.superuserParameters">superuser_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `data_bundles`<sup>Optional</sup> <a name="data_bundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dataBundles"></a>

- *Type:* typing.List[str]

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `federation_mode`<sup>Optional</sup> <a name="federation_mode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationMode"></a>

- *Type:* str

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `federation_parameters`<sup>Optional</sup> <a name="federation_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `superuser_parameters`<sup>Optional</sup> <a name="superuser_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.superuserParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters">put_federation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters">put_superuser_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles">reset_data_bundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode">reset_federation_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters">reset_federation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters">reset_superuser_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_federation_parameters` <a name="put_federation_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters"></a>

```python
def put_federation_parameters(
  application_call_back_url: str = None,
  attribute_map: IResolvable | typing.List[FinspaceEnvironmentFederationParametersAttributeMap] = None,
  federation_provider_name: str = None,
  federation_urn: str = None,
  saml_metadata_document: str = None,
  saml_metadata_url: str = None
) -> None
```

###### `application_call_back_url`<sup>Optional</sup> <a name="application_call_back_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.applicationCallBackUrl"></a>

- *Type:* str

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#application_call_back_url FinspaceEnvironment#application_call_back_url}

---

###### `attribute_map`<sup>Optional</sup> <a name="attribute_map" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.attributeMap"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]

Attribute map for SAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#attribute_map FinspaceEnvironment#attribute_map}

---

###### `federation_provider_name`<sup>Optional</sup> <a name="federation_provider_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.federationProviderName"></a>

- *Type:* str

Federation provider name to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_provider_name FinspaceEnvironment#federation_provider_name}

---

###### `federation_urn`<sup>Optional</sup> <a name="federation_urn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.federationUrn"></a>

- *Type:* str

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_urn FinspaceEnvironment#federation_urn}

---

###### `saml_metadata_document`<sup>Optional</sup> <a name="saml_metadata_document" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.samlMetadataDocument"></a>

- *Type:* str

SAML metadata document to link the federation provider to the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_document FinspaceEnvironment#saml_metadata_document}

---

###### `saml_metadata_url`<sup>Optional</sup> <a name="saml_metadata_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.samlMetadataUrl"></a>

- *Type:* str

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_url FinspaceEnvironment#saml_metadata_url}

---

##### `put_superuser_parameters` <a name="put_superuser_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters"></a>

```python
def put_superuser_parameters(
  email_address: str = None,
  first_name: str = None,
  last_name: str = None
) -> None
```

###### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.emailAddress"></a>

- *Type:* str

Email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#email_address FinspaceEnvironment#email_address}

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.firstName"></a>

- *Type:* str

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#first_name FinspaceEnvironment#first_name}

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.lastName"></a>

- *Type:* str

Last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#last_name FinspaceEnvironment#last_name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FinspaceEnvironmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]

---

##### `reset_data_bundles` <a name="reset_data_bundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles"></a>

```python
def reset_data_bundles() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_federation_mode` <a name="reset_federation_mode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode"></a>

```python
def reset_federation_mode() -> None
```

##### `reset_federation_parameters` <a name="reset_federation_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters"></a>

```python
def reset_federation_parameters() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_superuser_parameters` <a name="reset_superuser_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters"></a>

```python
def reset_superuser_parameters() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FinspaceEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId">dedicated_service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn">environment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl">environment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters">federation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl">sage_maker_studio_domain_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters">superuser_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput">data_bundles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput">federation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput">federation_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput">superuser_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles">data_bundles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode">federation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `dedicated_service_account_id`<sup>Required</sup> <a name="dedicated_service_account_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```python
dedicated_service_account_id: str
```

- *Type:* str

---

##### `environment_arn`<sup>Required</sup> <a name="environment_arn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn"></a>

```python
environment_arn: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `environment_url`<sup>Required</sup> <a name="environment_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl"></a>

```python
environment_url: str
```

- *Type:* str

---

##### `federation_parameters`<sup>Required</sup> <a name="federation_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters"></a>

```python
federation_parameters: FinspaceEnvironmentFederationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sage_maker_studio_domain_url`<sup>Required</sup> <a name="sage_maker_studio_domain_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```python
sage_maker_studio_domain_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `superuser_parameters`<sup>Required</sup> <a name="superuser_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters"></a>

```python
superuser_parameters: FinspaceEnvironmentSuperuserParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags"></a>

```python
tags: FinspaceEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a>

---

##### `data_bundles_input`<sup>Optional</sup> <a name="data_bundles_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput"></a>

```python
data_bundles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `federation_mode_input`<sup>Optional</sup> <a name="federation_mode_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput"></a>

```python
federation_mode_input: str
```

- *Type:* str

---

##### `federation_parameters_input`<sup>Optional</sup> <a name="federation_parameters_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput"></a>

```python
federation_parameters_input: IResolvable | FinspaceEnvironmentFederationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `superuser_parameters_input`<sup>Optional</sup> <a name="superuser_parameters_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput"></a>

```python
superuser_parameters_input: IResolvable | FinspaceEnvironmentSuperuserParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FinspaceEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]

---

##### `data_bundles`<sup>Required</sup> <a name="data_bundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles"></a>

```python
data_bundles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `federation_mode`<sup>Required</sup> <a name="federation_mode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode"></a>

```python
federation_mode: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceEnvironmentConfig <a name="FinspaceEnvironmentConfig" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  data_bundles: typing.List[str] = None,
  description: str = None,
  federation_mode: str = None,
  federation_parameters: FinspaceEnvironmentFederationParameters = None,
  kms_key_id: str = None,
  superuser_parameters: FinspaceEnvironmentSuperuserParameters = None,
  tags: IResolvable | typing.List[FinspaceEnvironmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles">data_bundles</a></code> | <code>typing.List[str]</code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode">federation_mode</a></code> | <code>str</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters">federation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters">superuser_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `data_bundles`<sup>Optional</sup> <a name="data_bundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles"></a>

```python
data_bundles: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `federation_mode`<sup>Optional</sup> <a name="federation_mode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode"></a>

```python
federation_mode: str
```

- *Type:* str

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `federation_parameters`<sup>Optional</sup> <a name="federation_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters"></a>

```python
federation_parameters: FinspaceEnvironmentFederationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `superuser_parameters`<sup>Optional</sup> <a name="superuser_parameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters"></a>

```python
superuser_parameters: FinspaceEnvironmentSuperuserParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FinspaceEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

### FinspaceEnvironmentFederationParameters <a name="FinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentFederationParameters(
  application_call_back_url: str = None,
  attribute_map: IResolvable | typing.List[FinspaceEnvironmentFederationParametersAttributeMap] = None,
  federation_provider_name: str = None,
  federation_urn: str = None,
  saml_metadata_document: str = None,
  saml_metadata_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl">application_call_back_url</a></code> | <code>str</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap">attribute_map</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]</code> | Attribute map for SAML configuration. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName">federation_provider_name</a></code> | <code>str</code> | Federation provider name to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn">federation_urn</a></code> | <code>str</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument">saml_metadata_document</a></code> | <code>str</code> | SAML metadata document to link the federation provider to the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl">saml_metadata_url</a></code> | <code>str</code> | SAML metadata URL to link with the Environment. |

---

##### `application_call_back_url`<sup>Optional</sup> <a name="application_call_back_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl"></a>

```python
application_call_back_url: str
```

- *Type:* str

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#application_call_back_url FinspaceEnvironment#application_call_back_url}

---

##### `attribute_map`<sup>Optional</sup> <a name="attribute_map" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap"></a>

```python
attribute_map: IResolvable | typing.List[FinspaceEnvironmentFederationParametersAttributeMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]

Attribute map for SAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#attribute_map FinspaceEnvironment#attribute_map}

---

##### `federation_provider_name`<sup>Optional</sup> <a name="federation_provider_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName"></a>

```python
federation_provider_name: str
```

- *Type:* str

Federation provider name to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_provider_name FinspaceEnvironment#federation_provider_name}

---

##### `federation_urn`<sup>Optional</sup> <a name="federation_urn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn"></a>

```python
federation_urn: str
```

- *Type:* str

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_urn FinspaceEnvironment#federation_urn}

---

##### `saml_metadata_document`<sup>Optional</sup> <a name="saml_metadata_document" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument"></a>

```python
saml_metadata_document: str
```

- *Type:* str

SAML metadata document to link the federation provider to the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_document FinspaceEnvironment#saml_metadata_document}

---

##### `saml_metadata_url`<sup>Optional</sup> <a name="saml_metadata_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl"></a>

```python
saml_metadata_url: str
```

- *Type:* str

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_url FinspaceEnvironment#saml_metadata_url}

---

### FinspaceEnvironmentFederationParametersAttributeMap <a name="FinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

### FinspaceEnvironmentSuperuserParameters <a name="FinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentSuperuserParameters(
  email_address: str = None,
  first_name: str = None,
  last_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress">email_address</a></code> | <code>str</code> | Email address. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName">first_name</a></code> | <code>str</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName">last_name</a></code> | <code>str</code> | Last name. |

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#email_address FinspaceEnvironment#email_address}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#first_name FinspaceEnvironment#first_name}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#last_name FinspaceEnvironment#last_name}

---

### FinspaceEnvironmentTags <a name="FinspaceEnvironmentTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceEnvironmentFederationParametersAttributeMapList <a name="FinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FinspaceEnvironmentFederationParametersAttributeMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]

---


### FinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="FinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FinspaceEnvironmentFederationParametersAttributeMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>

---


### FinspaceEnvironmentFederationParametersOutputReference <a name="FinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap">put_attribute_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl">reset_application_call_back_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap">reset_attribute_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName">reset_federation_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn">reset_federation_urn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument">reset_saml_metadata_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl">reset_saml_metadata_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attribute_map` <a name="put_attribute_map" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap"></a>

```python
def put_attribute_map(
  value: IResolvable | typing.List[FinspaceEnvironmentFederationParametersAttributeMap]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]

---

##### `reset_application_call_back_url` <a name="reset_application_call_back_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl"></a>

```python
def reset_application_call_back_url() -> None
```

##### `reset_attribute_map` <a name="reset_attribute_map" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap"></a>

```python
def reset_attribute_map() -> None
```

##### `reset_federation_provider_name` <a name="reset_federation_provider_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName"></a>

```python
def reset_federation_provider_name() -> None
```

##### `reset_federation_urn` <a name="reset_federation_urn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn"></a>

```python
def reset_federation_urn() -> None
```

##### `reset_saml_metadata_document` <a name="reset_saml_metadata_document" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument"></a>

```python
def reset_saml_metadata_document() -> None
```

##### `reset_saml_metadata_url` <a name="reset_saml_metadata_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl"></a>

```python
def reset_saml_metadata_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">attribute_map</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput">application_call_back_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput">attribute_map_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput">federation_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput">federation_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput">saml_metadata_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput">saml_metadata_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">application_call_back_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">federation_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">federation_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">saml_metadata_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">saml_metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_map`<sup>Required</sup> <a name="attribute_map" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```python
attribute_map: FinspaceEnvironmentFederationParametersAttributeMapList
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `application_call_back_url_input`<sup>Optional</sup> <a name="application_call_back_url_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput"></a>

```python
application_call_back_url_input: str
```

- *Type:* str

---

##### `attribute_map_input`<sup>Optional</sup> <a name="attribute_map_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput"></a>

```python
attribute_map_input: IResolvable | typing.List[FinspaceEnvironmentFederationParametersAttributeMap]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>]

---

##### `federation_provider_name_input`<sup>Optional</sup> <a name="federation_provider_name_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput"></a>

```python
federation_provider_name_input: str
```

- *Type:* str

---

##### `federation_urn_input`<sup>Optional</sup> <a name="federation_urn_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput"></a>

```python
federation_urn_input: str
```

- *Type:* str

---

##### `saml_metadata_document_input`<sup>Optional</sup> <a name="saml_metadata_document_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput"></a>

```python
saml_metadata_document_input: str
```

- *Type:* str

---

##### `saml_metadata_url_input`<sup>Optional</sup> <a name="saml_metadata_url_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput"></a>

```python
saml_metadata_url_input: str
```

- *Type:* str

---

##### `application_call_back_url`<sup>Required</sup> <a name="application_call_back_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```python
application_call_back_url: str
```

- *Type:* str

---

##### `federation_provider_name`<sup>Required</sup> <a name="federation_provider_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```python
federation_provider_name: str
```

- *Type:* str

---

##### `federation_urn`<sup>Required</sup> <a name="federation_urn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```python
federation_urn: str
```

- *Type:* str

---

##### `saml_metadata_document`<sup>Required</sup> <a name="saml_metadata_document" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```python
saml_metadata_document: str
```

- *Type:* str

---

##### `saml_metadata_url`<sup>Required</sup> <a name="saml_metadata_url" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```python
saml_metadata_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FinspaceEnvironmentFederationParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---


### FinspaceEnvironmentSuperuserParametersOutputReference <a name="FinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_address` <a name="reset_email_address" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FinspaceEnvironmentSuperuserParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---


### FinspaceEnvironmentTagsList <a name="FinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FinspaceEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>]

---


### FinspaceEnvironmentTagsOutputReference <a name="FinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import finspace_environment

finspaceEnvironment.FinspaceEnvironmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FinspaceEnvironmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>

---



