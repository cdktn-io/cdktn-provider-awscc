# `mediapackagev2OriginEndpointPolicy` Submodule <a name="`mediapackagev2OriginEndpointPolicy` Submodule" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2OriginEndpointPolicy <a name="Mediapackagev2OriginEndpointPolicy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_group_name: str,
  channel_name: str,
  origin_endpoint_name: str,
  policy: str,
  cdn_auth_configuration: Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelGroupName">channel_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.originEndpointName">origin_endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.cdnAuthConfiguration">cdn_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | <p>The settings to enable CDN authorization headers in MediaPackage.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_group_name`<sup>Required</sup> <a name="channel_group_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}.

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.channelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}.

---

##### `origin_endpoint_name`<sup>Required</sup> <a name="origin_endpoint_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.originEndpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}.

---

##### `cdn_auth_configuration`<sup>Optional</sup> <a name="cdn_auth_configuration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.cdnAuthConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

<p>The settings to enable CDN authorization headers in MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_auth_configuration Mediapackagev2OriginEndpointPolicy#cdn_auth_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration">put_cdn_auth_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetCdnAuthConfiguration">reset_cdn_auth_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cdn_auth_configuration` <a name="put_cdn_auth_configuration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration"></a>

```python
def put_cdn_auth_configuration(
  cdn_identifier_secret_arns: typing.List[str] = None,
  secrets_role_arn: str = None
) -> None
```

###### `cdn_identifier_secret_arns`<sup>Optional</sup> <a name="cdn_identifier_secret_arns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration.parameter.cdnIdentifierSecretArns"></a>

- *Type:* typing.List[str]

<p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_identifier_secret_arns Mediapackagev2OriginEndpointPolicy#cdn_identifier_secret_arns}

---

###### `secrets_role_arn`<sup>Optional</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration.parameter.secretsRoleArn"></a>

- *Type:* str

<p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#secrets_role_arn Mediapackagev2OriginEndpointPolicy#secrets_role_arn}

---

##### `reset_cdn_auth_configuration` <a name="reset_cdn_auth_configuration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetCdnAuthConfiguration"></a>

```python
def reset_cdn_auth_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Mediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Mediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Mediapackagev2OriginEndpointPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Mediapackagev2OriginEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2OriginEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration">cdn_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfigurationInput">cdn_auth_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupNameInput">channel_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointNameInput">origin_endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupName">channel_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointName">origin_endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cdn_auth_configuration`<sup>Required</sup> <a name="cdn_auth_configuration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration"></a>

```python
cdn_auth_configuration: Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `cdn_auth_configuration_input`<sup>Optional</sup> <a name="cdn_auth_configuration_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfigurationInput"></a>

```python
cdn_auth_configuration_input: IResolvable | Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---

##### `channel_group_name_input`<sup>Optional</sup> <a name="channel_group_name_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupNameInput"></a>

```python
channel_group_name_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `origin_endpoint_name_input`<sup>Optional</sup> <a name="origin_endpoint_name_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointNameInput"></a>

```python
origin_endpoint_name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `channel_group_name`<sup>Required</sup> <a name="channel_group_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupName"></a>

```python
channel_group_name: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `origin_endpoint_name`<sup>Required</sup> <a name="origin_endpoint_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointName"></a>

```python
origin_endpoint_name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration <a name="Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration(
  cdn_identifier_secret_arns: typing.List[str] = None,
  secrets_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.cdnIdentifierSecretArns">cdn_identifier_secret_arns</a></code> | <code>typing.List[str]</code> | <p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.secretsRoleArn">secrets_role_arn</a></code> | <code>str</code> | <p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>. |

---

##### `cdn_identifier_secret_arns`<sup>Optional</sup> <a name="cdn_identifier_secret_arns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.cdnIdentifierSecretArns"></a>

```python
cdn_identifier_secret_arns: typing.List[str]
```

- *Type:* typing.List[str]

<p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_identifier_secret_arns Mediapackagev2OriginEndpointPolicy#cdn_identifier_secret_arns}

---

##### `secrets_role_arn`<sup>Optional</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.secretsRoleArn"></a>

```python
secrets_role_arn: str
```

- *Type:* str

<p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#secrets_role_arn Mediapackagev2OriginEndpointPolicy#secrets_role_arn}

---

### Mediapackagev2OriginEndpointPolicyConfig <a name="Mediapackagev2OriginEndpointPolicyConfig" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_group_name: str,
  channel_name: str,
  origin_endpoint_name: str,
  policy: str,
  cdn_auth_configuration: Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelGroupName">channel_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.originEndpointName">origin_endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.cdnAuthConfiguration">cdn_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | <p>The settings to enable CDN authorization headers in MediaPackage.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_group_name`<sup>Required</sup> <a name="channel_group_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelGroupName"></a>

```python
channel_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}.

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}.

---

##### `origin_endpoint_name`<sup>Required</sup> <a name="origin_endpoint_name" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.originEndpointName"></a>

```python
origin_endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}.

---

##### `cdn_auth_configuration`<sup>Optional</sup> <a name="cdn_auth_configuration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.cdnAuthConfiguration"></a>

```python
cdn_auth_configuration: Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

<p>The settings to enable CDN authorization headers in MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_auth_configuration Mediapackagev2OriginEndpointPolicy#cdn_auth_configuration}

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference <a name="Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackagev2_origin_endpoint_policy

mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetCdnIdentifierSecretArns">reset_cdn_identifier_secret_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetSecretsRoleArn">reset_secrets_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cdn_identifier_secret_arns` <a name="reset_cdn_identifier_secret_arns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetCdnIdentifierSecretArns"></a>

```python
def reset_cdn_identifier_secret_arns() -> None
```

##### `reset_secrets_role_arn` <a name="reset_secrets_role_arn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetSecretsRoleArn"></a>

```python
def reset_secrets_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArnsInput">cdn_identifier_secret_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArnInput">secrets_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns">cdn_identifier_secret_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn">secrets_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cdn_identifier_secret_arns_input`<sup>Optional</sup> <a name="cdn_identifier_secret_arns_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArnsInput"></a>

```python
cdn_identifier_secret_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secrets_role_arn_input`<sup>Optional</sup> <a name="secrets_role_arn_input" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArnInput"></a>

```python
secrets_role_arn_input: str
```

- *Type:* str

---

##### `cdn_identifier_secret_arns`<sup>Required</sup> <a name="cdn_identifier_secret_arns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns"></a>

```python
cdn_identifier_secret_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secrets_role_arn`<sup>Required</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn"></a>

```python
secrets_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---



