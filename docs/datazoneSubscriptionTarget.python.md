# `datazoneSubscriptionTarget` Submodule <a name="`datazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.datazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneSubscriptionTarget <a name="DatazoneSubscriptionTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTarget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  applicable_asset_types: typing.List[str],
  authorized_principals: typing.List[str],
  domain_identifier: str,
  environment_identifier: str,
  name: str,
  subscription_target_config: IResolvable | typing.List[DatazoneSubscriptionTargetSubscriptionTargetConfig],
  type: str,
  manage_access_role: str = None,
  provider_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.applicableAssetTypes">applicable_asset_types</a></code> | <code>typing.List[str]</code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.authorizedPrincipals">authorized_principals</a></code> | <code>typing.List[str]</code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.subscriptionTargetConfig">subscription_target_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]</code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.manageAccessRole">manage_access_role</a></code> | <code>str</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | The provider of the subscription target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `applicable_asset_types`<sup>Required</sup> <a name="applicable_asset_types" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.applicableAssetTypes"></a>

- *Type:* typing.List[str]

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `authorized_principals`<sup>Required</sup> <a name="authorized_principals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.authorizedPrincipals"></a>

- *Type:* typing.List[str]

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.name"></a>

- *Type:* str

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `subscription_target_config`<sup>Required</sup> <a name="subscription_target_config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.subscriptionTargetConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.type"></a>

- *Type:* str

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `manage_access_role`<sup>Optional</sup> <a name="manage_access_role" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.manageAccessRole"></a>

- *Type:* str

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.providerName"></a>

- *Type:* str

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig">put_subscription_target_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole">reset_manage_access_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName">reset_provider_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subscription_target_config` <a name="put_subscription_target_config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig"></a>

```python
def put_subscription_target_config(
  value: IResolvable | typing.List[DatazoneSubscriptionTargetSubscriptionTargetConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]

---

##### `reset_manage_access_role` <a name="reset_manage_access_role" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole"></a>

```python
def reset_manage_access_role() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneSubscriptionTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig">subscription_target_config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId">subscription_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput">applicable_asset_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput">authorized_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput">manage_access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput">subscription_target_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes">applicable_asset_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals">authorized_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole">manage_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `subscription_target_config`<sup>Required</sup> <a name="subscription_target_config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```python
subscription_target_config: DatazoneSubscriptionTargetSubscriptionTargetConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `subscription_target_id`<sup>Required</sup> <a name="subscription_target_id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```python
subscription_target_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `applicable_asset_types_input`<sup>Optional</sup> <a name="applicable_asset_types_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput"></a>

```python
applicable_asset_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorized_principals_input`<sup>Optional</sup> <a name="authorized_principals_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput"></a>

```python
authorized_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `manage_access_role_input`<sup>Optional</sup> <a name="manage_access_role_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput"></a>

```python
manage_access_role_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `subscription_target_config_input`<sup>Optional</sup> <a name="subscription_target_config_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput"></a>

```python
subscription_target_config_input: IResolvable | typing.List[DatazoneSubscriptionTargetSubscriptionTargetConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `applicable_asset_types`<sup>Required</sup> <a name="applicable_asset_types" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```python
applicable_asset_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorized_principals`<sup>Required</sup> <a name="authorized_principals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```python
authorized_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `manage_access_role`<sup>Required</sup> <a name="manage_access_role" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole"></a>

```python
manage_access_role: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  applicable_asset_types: typing.List[str],
  authorized_principals: typing.List[str],
  domain_identifier: str,
  environment_identifier: str,
  name: str,
  subscription_target_config: IResolvable | typing.List[DatazoneSubscriptionTargetSubscriptionTargetConfig],
  type: str,
  manage_access_role: str = None,
  provider_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes">applicable_asset_types</a></code> | <code>typing.List[str]</code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals">authorized_principals</a></code> | <code>typing.List[str]</code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name">name</a></code> | <code>str</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig">subscription_target_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]</code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type">type</a></code> | <code>str</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole">manage_access_role</a></code> | <code>str</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName">provider_name</a></code> | <code>str</code> | The provider of the subscription target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `applicable_asset_types`<sup>Required</sup> <a name="applicable_asset_types" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes"></a>

```python
applicable_asset_types: typing.List[str]
```

- *Type:* typing.List[str]

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `authorized_principals`<sup>Required</sup> <a name="authorized_principals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals"></a>

```python
authorized_principals: typing.List[str]
```

- *Type:* typing.List[str]

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `subscription_target_config`<sup>Required</sup> <a name="subscription_target_config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig"></a>

```python
subscription_target_config: IResolvable | typing.List[DatazoneSubscriptionTargetSubscriptionTargetConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `manage_access_role`<sup>Optional</sup> <a name="manage_access_role" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole"></a>

```python
manage_access_role: str
```

- *Type:* str

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

### DatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig(
  content: str,
  form_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content">content</a></code> | <code>str</code> | The content of the subscription target configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName">form_name</a></code> | <code>str</code> | The form name included in the subscription target configuration. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#content DatazoneSubscriptionTarget#content}

---

##### `form_name`<sup>Required</sup> <a name="form_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName"></a>

```python
form_name: str
```

- *Type:* str

The form name included in the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#form_name DatazoneSubscriptionTarget#form_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneSubscriptionTargetSubscriptionTargetConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>]

---


### DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_subscription_target

datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput">form_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">form_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `form_name_input`<sup>Optional</sup> <a name="form_name_input" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput"></a>

```python
form_name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `form_name`<sup>Required</sup> <a name="form_name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```python
form_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneSubscriptionTargetSubscriptionTargetConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>

---



