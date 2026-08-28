# `eksIdentityProviderConfig` Submodule <a name="`eksIdentityProviderConfig` Submodule" id="@cdktn/provider-awscc.eksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksIdentityProviderConfig <a name="EksIdentityProviderConfig" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config awscc_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_name: str,
  type: str,
  identity_provider_config_name: str = None,
  oidc: EksIdentityProviderConfigOidc = None,
  tags: IResolvable | typing.List[EksIdentityProviderConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the identity provider configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the identity provider configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.identityProviderConfigName">identity_provider_config_name</a></code> | <code>str</code> | The name of the OIDC provider configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | An object representing an OpenID Connect (OIDC) configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.type"></a>

- *Type:* str

The type of the identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#type EksIdentityProviderConfig#type}

---

##### `identity_provider_config_name`<sup>Optional</sup> <a name="identity_provider_config_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.identityProviderConfigName"></a>

- *Type:* str

The name of the OIDC provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

An object representing an OpenID Connect (OIDC) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc">put_oidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetIdentityProviderConfigName">reset_identity_provider_config_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOidc">reset_oidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_oidc` <a name="put_oidc" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc"></a>

```python
def put_oidc(
  client_id: str = None,
  groups_claim: str = None,
  groups_prefix: str = None,
  issuer_url: str = None,
  required_claims: IResolvable | typing.List[EksIdentityProviderConfigOidcRequiredClaims] = None,
  username_claim: str = None,
  username_prefix: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.clientId"></a>

- *Type:* str

This is also known as audience.

The ID for the client application that makes authentication requests to the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}

---

###### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.groupsClaim"></a>

- *Type:* str

The JWT claim that the provider uses to return your groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}

---

###### `groups_prefix`<sup>Optional</sup> <a name="groups_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.groupsPrefix"></a>

- *Type:* str

The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}

---

###### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.issuerUrl"></a>

- *Type:* str

The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}

---

###### `required_claims`<sup>Optional</sup> <a name="required_claims" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.requiredClaims"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

###### `username_claim`<sup>Optional</sup> <a name="username_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.usernameClaim"></a>

- *Type:* str

The JSON Web Token (JWT) claim to use as the username.

The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}

---

###### `username_prefix`<sup>Optional</sup> <a name="username_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.usernamePrefix"></a>

- *Type:* str

The prefix that is prepended to username claims to prevent clashes with existing names.

If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EksIdentityProviderConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]

---

##### `reset_identity_provider_config_name` <a name="reset_identity_provider_config_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetIdentityProviderConfigName"></a>

```python
def reset_identity_provider_config_name() -> None
```

##### `reset_oidc` <a name="reset_oidc" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOidc"></a>

```python
def reset_oidc() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EksIdentityProviderConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EksIdentityProviderConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksIdentityProviderConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksIdentityProviderConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EksIdentityProviderConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.identityProviderConfigArn">identity_provider_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList">EksIdentityProviderConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.identityProviderConfigNameInput">identity_provider_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput">oidc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.identityProviderConfigName">identity_provider_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_config_arn`<sup>Required</sup> <a name="identity_provider_config_arn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.identityProviderConfigArn"></a>

```python
identity_provider_config_arn: str
```

- *Type:* str

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc"></a>

```python
oidc: EksIdentityProviderConfigOidcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags"></a>

```python
tags: EksIdentityProviderConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList">EksIdentityProviderConfigTagsList</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `identity_provider_config_name_input`<sup>Optional</sup> <a name="identity_provider_config_name_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.identityProviderConfigNameInput"></a>

```python
identity_provider_config_name_input: str
```

- *Type:* str

---

##### `oidc_input`<sup>Optional</sup> <a name="oidc_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput"></a>

```python
oidc_input: IResolvable | EksIdentityProviderConfigOidc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EksIdentityProviderConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `identity_provider_config_name`<sup>Required</sup> <a name="identity_provider_config_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.identityProviderConfigName"></a>

```python
identity_provider_config_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksIdentityProviderConfigConfig <a name="EksIdentityProviderConfigConfig" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_name: str,
  type: str,
  identity_provider_config_name: str = None,
  oidc: EksIdentityProviderConfigOidc = None,
  tags: IResolvable | typing.List[EksIdentityProviderConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the identity provider configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.type">type</a></code> | <code>str</code> | The type of the identity provider configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.identityProviderConfigName">identity_provider_config_name</a></code> | <code>str</code> | The name of the OIDC provider configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | An object representing an OpenID Connect (OIDC) configuration. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#type EksIdentityProviderConfig#type}

---

##### `identity_provider_config_name`<sup>Optional</sup> <a name="identity_provider_config_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.identityProviderConfigName"></a>

```python
identity_provider_config_name: str
```

- *Type:* str

The name of the OIDC provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc"></a>

```python
oidc: EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

An object representing an OpenID Connect (OIDC) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EksIdentityProviderConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}

---

### EksIdentityProviderConfigOidc <a name="EksIdentityProviderConfigOidc" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidc(
  client_id: str = None,
  groups_claim: str = None,
  groups_prefix: str = None,
  issuer_url: str = None,
  required_claims: IResolvable | typing.List[EksIdentityProviderConfigOidcRequiredClaims] = None,
  username_claim: str = None,
  username_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId">client_id</a></code> | <code>str</code> | This is also known as audience. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim">groups_claim</a></code> | <code>str</code> | The JWT claim that the provider uses to return your groups. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups). |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl">issuer_url</a></code> | <code>str</code> | The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims">required_claims</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim">username_claim</a></code> | <code>str</code> | The JSON Web Token (JWT) claim to use as the username. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | The prefix that is prepended to username claims to prevent clashes with existing names. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

This is also known as audience.

The ID for the client application that makes authentication requests to the OpenID identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

The JWT claim that the provider uses to return your groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}

---

##### `groups_prefix`<sup>Optional</sup> <a name="groups_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}

---

##### `issuer_url`<sup>Optional</sup> <a name="issuer_url" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}

---

##### `required_claims`<sup>Optional</sup> <a name="required_claims" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims"></a>

```python
required_claims: IResolvable | typing.List[EksIdentityProviderConfigOidcRequiredClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

##### `username_claim`<sup>Optional</sup> <a name="username_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

The JSON Web Token (JWT) claim to use as the username.

The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}

---

##### `username_prefix`<sup>Optional</sup> <a name="username_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

The prefix that is prepended to username claims to prevent clashes with existing names.

If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}

---

### EksIdentityProviderConfigOidcRequiredClaims <a name="EksIdentityProviderConfigOidcRequiredClaims" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims.property.key">key</a></code> | <code>str</code> | The key of the requiredClaims. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims.property.value">value</a></code> | <code>str</code> | The value for the requiredClaims. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the requiredClaims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#key EksIdentityProviderConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the requiredClaims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#value EksIdentityProviderConfig#value}

---

### EksIdentityProviderConfigTags <a name="EksIdentityProviderConfigTags" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#key EksIdentityProviderConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/eks_identity_provider_config#value EksIdentityProviderConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksIdentityProviderConfigOidcOutputReference <a name="EksIdentityProviderConfigOidcOutputReference" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.putRequiredClaims">put_required_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim">reset_groups_claim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix">reset_groups_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetIssuerUrl">reset_issuer_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims">reset_required_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim">reset_username_claim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix">reset_username_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required_claims` <a name="put_required_claims" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.putRequiredClaims"></a>

```python
def put_required_claims(
  value: IResolvable | typing.List[EksIdentityProviderConfigOidcRequiredClaims]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.putRequiredClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_groups_claim` <a name="reset_groups_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim"></a>

```python
def reset_groups_claim() -> None
```

##### `reset_groups_prefix` <a name="reset_groups_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix"></a>

```python
def reset_groups_prefix() -> None
```

##### `reset_issuer_url` <a name="reset_issuer_url" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetIssuerUrl"></a>

```python
def reset_issuer_url() -> None
```

##### `reset_required_claims` <a name="reset_required_claims" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims"></a>

```python
def reset_required_claims() -> None
```

##### `reset_username_claim` <a name="reset_username_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim"></a>

```python
def reset_username_claim() -> None
```

##### `reset_username_prefix` <a name="reset_username_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix"></a>

```python
def reset_username_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims">required_claims</a></code> | <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList">EksIdentityProviderConfigOidcRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput">groups_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput">groups_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput">required_claims_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput">username_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput">username_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim">groups_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim">username_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_claims`<sup>Required</sup> <a name="required_claims" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```python
required_claims: EksIdentityProviderConfigOidcRequiredClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList">EksIdentityProviderConfigOidcRequiredClaimsList</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `groups_claim_input`<sup>Optional</sup> <a name="groups_claim_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput"></a>

```python
groups_claim_input: str
```

- *Type:* str

---

##### `groups_prefix_input`<sup>Optional</sup> <a name="groups_prefix_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput"></a>

```python
groups_prefix_input: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `required_claims_input`<sup>Optional</sup> <a name="required_claims_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput"></a>

```python
required_claims_input: IResolvable | typing.List[EksIdentityProviderConfigOidcRequiredClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]

---

##### `username_claim_input`<sup>Optional</sup> <a name="username_claim_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput"></a>

```python
username_claim_input: str
```

- *Type:* str

---

##### `username_prefix_input`<sup>Optional</sup> <a name="username_prefix_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput"></a>

```python
username_prefix_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

---

##### `groups_prefix`<sup>Required</sup> <a name="groups_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `username_claim`<sup>Required</sup> <a name="username_claim" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

---

##### `username_prefix`<sup>Required</sup> <a name="username_prefix" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksIdentityProviderConfigOidc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---


### EksIdentityProviderConfigOidcRequiredClaimsList <a name="EksIdentityProviderConfigOidcRequiredClaimsList" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksIdentityProviderConfigOidcRequiredClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksIdentityProviderConfigOidcRequiredClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>]

---


### EksIdentityProviderConfigOidcRequiredClaimsOutputReference <a name="EksIdentityProviderConfigOidcRequiredClaimsOutputReference" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksIdentityProviderConfigOidcRequiredClaims
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigOidcRequiredClaims">EksIdentityProviderConfigOidcRequiredClaims</a>

---


### EksIdentityProviderConfigTagsList <a name="EksIdentityProviderConfigTagsList" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksIdentityProviderConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EksIdentityProviderConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>]

---


### EksIdentityProviderConfigTagsOutputReference <a name="EksIdentityProviderConfigTagsOutputReference" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EksIdentityProviderConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eksIdentityProviderConfig.EksIdentityProviderConfigTags">EksIdentityProviderConfigTags</a>

---



