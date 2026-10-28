# `bedrockagentcoreConsentPortal` Submodule <a name="`bedrockagentcoreConsentPortal` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreConsentPortal <a name="BedrockagentcoreConsentPortal" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal awscc_bedrockagentcore_consent_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  execution_role_arn: str,
  idp_config: BedrockagentcoreConsentPortalIdpConfig,
  name: str,
  sources: IResolvable | typing.List[BedrockagentcoreConsentPortalSources],
  description: str = None,
  tags: IResolvable | typing.List[BedrockagentcoreConsentPortalTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#execution_role_arn BedrockagentcoreConsentPortal#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#idp_config BedrockagentcoreConsentPortal#idp_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#name BedrockagentcoreConsentPortal#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#sources BedrockagentcoreConsentPortal#sources}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#description BedrockagentcoreConsentPortal#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]</code> | Tags to assign to the consent portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#execution_role_arn BedrockagentcoreConsentPortal#execution_role_arn}.

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#idp_config BedrockagentcoreConsentPortal#idp_config}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#name BedrockagentcoreConsentPortal#name}.

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#sources BedrockagentcoreConsentPortal#sources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#description BedrockagentcoreConsentPortal#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]

Tags to assign to the consent portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#tags BedrockagentcoreConsentPortal#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putIdpConfig"></a>

```python
def put_idp_config(
  credential_provider_arn: str,
  scopes: typing.List[str],
  audience: str = None
) -> None
```

###### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putIdpConfig.parameter.credentialProviderArn"></a>

- *Type:* str

The ARN of an AWS::BedrockAgentCore::OAuth2CredentialProvider resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#credential_provider_arn BedrockagentcoreConsentPortal#credential_provider_arn}

---

###### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putIdpConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#scopes BedrockagentcoreConsentPortal#scopes}.

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putIdpConfig.parameter.audience"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#audience BedrockagentcoreConsentPortal#audience}.

---

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[BedrockagentcoreConsentPortalSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockagentcoreConsentPortalTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreConsentPortal resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreConsentPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreConsentPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreConsentPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreConsentPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.consentPortalArn">consent_portal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.consentPortalId">consent_portal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference">BedrockagentcoreConsentPortalIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.portalUrl">portal_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList">BedrockagentcoreConsentPortalSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList">BedrockagentcoreConsentPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.idpConfigInput">idp_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `consent_portal_arn`<sup>Required</sup> <a name="consent_portal_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.consentPortalArn"></a>

```python
consent_portal_arn: str
```

- *Type:* str

---

##### `consent_portal_id`<sup>Required</sup> <a name="consent_portal_id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.consentPortalId"></a>

```python
consent_portal_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.idpConfig"></a>

```python
idp_config: BedrockagentcoreConsentPortalIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference">BedrockagentcoreConsentPortalIdpConfigOutputReference</a>

---

##### `portal_url`<sup>Required</sup> <a name="portal_url" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.portalUrl"></a>

```python
portal_url: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.sources"></a>

```python
sources: BedrockagentcoreConsentPortalSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList">BedrockagentcoreConsentPortalSourcesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.tags"></a>

```python
tags: BedrockagentcoreConsentPortalTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList">BedrockagentcoreConsentPortalTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.idpConfigInput"></a>

```python
idp_config_input: IResolvable | BedrockagentcoreConsentPortalIdpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[BedrockagentcoreConsentPortalSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockagentcoreConsentPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreConsentPortalConfig <a name="BedrockagentcoreConsentPortalConfig" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  execution_role_arn: str,
  idp_config: BedrockagentcoreConsentPortalIdpConfig,
  name: str,
  sources: IResolvable | typing.List[BedrockagentcoreConsentPortalSources],
  description: str = None,
  tags: IResolvable | typing.List[BedrockagentcoreConsentPortalTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#execution_role_arn BedrockagentcoreConsentPortal#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#idp_config BedrockagentcoreConsentPortal#idp_config}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#name BedrockagentcoreConsentPortal#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#sources BedrockagentcoreConsentPortal#sources}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#description BedrockagentcoreConsentPortal#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]</code> | Tags to assign to the consent portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#execution_role_arn BedrockagentcoreConsentPortal#execution_role_arn}.

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.idpConfig"></a>

```python
idp_config: BedrockagentcoreConsentPortalIdpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#idp_config BedrockagentcoreConsentPortal#idp_config}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#name BedrockagentcoreConsentPortal#name}.

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[BedrockagentcoreConsentPortalSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#sources BedrockagentcoreConsentPortal#sources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#description BedrockagentcoreConsentPortal#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockagentcoreConsentPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]

Tags to assign to the consent portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#tags BedrockagentcoreConsentPortal#tags}

---

### BedrockagentcoreConsentPortalIdpConfig <a name="BedrockagentcoreConsentPortalIdpConfig" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig(
  credential_provider_arn: str,
  scopes: typing.List[str],
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | The ARN of an AWS::BedrockAgentCore::OAuth2CredentialProvider resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#scopes BedrockagentcoreConsentPortal#scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.property.audience">audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#audience BedrockagentcoreConsentPortal#audience}. |

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

The ARN of an AWS::BedrockAgentCore::OAuth2CredentialProvider resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#credential_provider_arn BedrockagentcoreConsentPortal#credential_provider_arn}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#scopes BedrockagentcoreConsentPortal#scopes}.

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig.property.audience"></a>

```python
audience: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#audience BedrockagentcoreConsentPortal#audience}.

---

### BedrockagentcoreConsentPortalSources <a name="BedrockagentcoreConsentPortalSources" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources(
  identifier: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#identifier BedrockagentcoreConsentPortal#identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#type BedrockagentcoreConsentPortal#type}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#identifier BedrockagentcoreConsentPortal#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#type BedrockagentcoreConsentPortal#type}.

---

### BedrockagentcoreConsentPortalTags <a name="BedrockagentcoreConsentPortalTags" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#key BedrockagentcoreConsentPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#value BedrockagentcoreConsentPortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#key BedrockagentcoreConsentPortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrockagentcore_consent_portal#value BedrockagentcoreConsentPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreConsentPortalIdpConfigOutputReference <a name="BedrockagentcoreConsentPortalIdpConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.credentialProviderArnInput">credential_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `credential_provider_arn_input`<sup>Optional</sup> <a name="credential_provider_arn_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.credentialProviderArnInput"></a>

```python
credential_provider_arn_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreConsentPortalIdpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalIdpConfig">BedrockagentcoreConsentPortalIdpConfig</a>

---


### BedrockagentcoreConsentPortalSourcesList <a name="BedrockagentcoreConsentPortalSourcesList" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreConsentPortalSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreConsentPortalSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>]

---


### BedrockagentcoreConsentPortalSourcesOutputReference <a name="BedrockagentcoreConsentPortalSourcesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreConsentPortalSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalSources">BedrockagentcoreConsentPortalSources</a>

---


### BedrockagentcoreConsentPortalTagsList <a name="BedrockagentcoreConsentPortalTagsList" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreConsentPortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreConsentPortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>]

---


### BedrockagentcoreConsentPortalTagsOutputReference <a name="BedrockagentcoreConsentPortalTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_consent_portal

bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreConsentPortalTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConsentPortal.BedrockagentcoreConsentPortalTags">BedrockagentcoreConsentPortalTags</a>

---



