# `route53GlobalresolverAccessToken` Submodule <a name="`route53GlobalresolverAccessToken` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverAccessToken <a name="Route53GlobalresolverAccessToken" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token awscc_route53globalresolver_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dns_view_id: str,
  client_token: str = None,
  expires_at: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverAccessTokenTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.dnsViewId">dns_view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#dns_view_id Route53GlobalresolverAccessToken#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#client_token Route53GlobalresolverAccessToken#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#expires_at Route53GlobalresolverAccessToken#expires_at}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#name Route53GlobalresolverAccessToken#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#tags Route53GlobalresolverAccessToken#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.dnsViewId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#dns_view_id Route53GlobalresolverAccessToken#dns_view_id}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.clientToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#client_token Route53GlobalresolverAccessToken#client_token}.

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.expiresAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#expires_at Route53GlobalresolverAccessToken#expires_at}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#name Route53GlobalresolverAccessToken#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#tags Route53GlobalresolverAccessToken#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53GlobalresolverAccessTokenTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53GlobalresolverAccessToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53GlobalresolverAccessToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53GlobalresolverAccessToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53GlobalresolverAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.accessTokenId">access_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.globalResolverId">global_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList">Route53GlobalresolverAccessTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewIdInput">dns_view_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_token_id`<sup>Required</sup> <a name="access_token_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.accessTokenId"></a>

```python
access_token_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `global_resolver_id`<sup>Required</sup> <a name="global_resolver_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.globalResolverId"></a>

```python
global_resolver_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tags"></a>

```python
tags: Route53GlobalresolverAccessTokenTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList">Route53GlobalresolverAccessTokenTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `dns_view_id_input`<sup>Optional</sup> <a name="dns_view_id_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewIdInput"></a>

```python
dns_view_id_input: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53GlobalresolverAccessTokenTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverAccessTokenConfig <a name="Route53GlobalresolverAccessTokenConfig" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dns_view_id: str,
  client_token: str = None,
  expires_at: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Route53GlobalresolverAccessTokenTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dnsViewId">dns_view_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#dns_view_id Route53GlobalresolverAccessToken#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.clientToken">client_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#client_token Route53GlobalresolverAccessToken#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#expires_at Route53GlobalresolverAccessToken#expires_at}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#name Route53GlobalresolverAccessToken#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#tags Route53GlobalresolverAccessToken#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dns_view_id`<sup>Required</sup> <a name="dns_view_id" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.dnsViewId"></a>

```python
dns_view_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#dns_view_id Route53GlobalresolverAccessToken#dns_view_id}.

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#client_token Route53GlobalresolverAccessToken#client_token}.

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#expires_at Route53GlobalresolverAccessToken#expires_at}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#name Route53GlobalresolverAccessToken#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53GlobalresolverAccessTokenTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#tags Route53GlobalresolverAccessToken#tags}.

---

### Route53GlobalresolverAccessTokenTags <a name="Route53GlobalresolverAccessTokenTags" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#key Route53GlobalresolverAccessToken#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#value Route53GlobalresolverAccessToken#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#key Route53GlobalresolverAccessToken#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_access_token#value Route53GlobalresolverAccessToken#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverAccessTokenTagsList <a name="Route53GlobalresolverAccessTokenTagsList" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53GlobalresolverAccessTokenTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53GlobalresolverAccessTokenTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>]

---


### Route53GlobalresolverAccessTokenTagsOutputReference <a name="Route53GlobalresolverAccessTokenTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_globalresolver_access_token

route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53GlobalresolverAccessTokenTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverAccessToken.Route53GlobalresolverAccessTokenTags">Route53GlobalresolverAccessTokenTags</a>

---



