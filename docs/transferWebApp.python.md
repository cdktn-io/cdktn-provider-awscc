# `transferWebApp` Submodule <a name="`transferWebApp` Submodule" id="@cdktn/provider-awscc.transferWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebApp <a name="TransferWebApp" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app awscc_transfer_web_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_provider_details: TransferWebAppIdentityProviderDetails,
  access_endpoint: str = None,
  endpoint_details: TransferWebAppEndpointDetails = None,
  tags: IResolvable | typing.List[TransferWebAppTags] = None,
  web_app_customization: TransferWebAppWebAppCustomization = None,
  web_app_endpoint_policy: str = None,
  web_app_units: TransferWebAppWebAppUnits = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.identityProviderDetails">identity_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | You can provide a structure that contains the details for the identity provider to use with your web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.accessEndpoint">access_endpoint</a></code> | <code>str</code> | The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.endpointDetails">endpoint_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]</code> | Key-value pairs that can be used to group and search for web apps. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.webAppCustomization">web_app_customization</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.webAppEndpointPolicy">web_app_endpoint_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.webAppUnits">web_app_units</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_provider_details`<sup>Required</sup> <a name="identity_provider_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.identityProviderDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

You can provide a structure that contains the details for the identity provider to use with your web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}

---

##### `access_endpoint`<sup>Optional</sup> <a name="access_endpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.accessEndpoint"></a>

- *Type:* str

The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app.

You can specify a custom URL or use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}

---

##### `endpoint_details`<sup>Optional</sup> <a name="endpoint_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.endpointDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]

Key-value pairs that can be used to group and search for web apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}

---

##### `web_app_customization`<sup>Optional</sup> <a name="web_app_customization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.webAppCustomization"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}.

---

##### `web_app_endpoint_policy`<sup>Optional</sup> <a name="web_app_endpoint_policy" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.webAppEndpointPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}.

---

##### `web_app_units`<sup>Optional</sup> <a name="web_app_units" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.webAppUnits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putEndpointDetails">put_endpoint_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails">put_identity_provider_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization">put_web_app_customization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppUnits">put_web_app_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetAccessEndpoint">reset_access_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetEndpointDetails">reset_endpoint_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppCustomization">reset_web_app_customization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy">reset_web_app_endpoint_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppUnits">reset_web_app_units</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_details` <a name="put_endpoint_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putEndpointDetails"></a>

```python
def put_endpoint_details(
  vpc: TransferWebAppEndpointDetailsVpc = None
) -> None
```

###### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putEndpointDetails.parameter.vpc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

You can provide a structure that contains the details for the VPC endpoint to use with your web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc TransferWebApp#vpc}

---

##### `put_identity_provider_details` <a name="put_identity_provider_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails"></a>

```python
def put_identity_provider_details(
  instance_arn: str = None,
  role: str = None
) -> None
```

###### `instance_arn`<sup>Optional</sup> <a name="instance_arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails.parameter.instanceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}

---

###### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails.parameter.role"></a>

- *Type:* str

The IAM role in IAM Identity Center used for the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#role TransferWebApp#role}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TransferWebAppTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]

---

##### `put_web_app_customization` <a name="put_web_app_customization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization"></a>

```python
def put_web_app_customization(
  favicon_file: str = None,
  logo_file: str = None,
  title: str = None
) -> None
```

###### `favicon_file`<sup>Optional</sup> <a name="favicon_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization.parameter.faviconFile"></a>

- *Type:* str

Specifies a favicon to display in the browser tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#favicon_file TransferWebApp#favicon_file}

---

###### `logo_file`<sup>Optional</sup> <a name="logo_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization.parameter.logoFile"></a>

- *Type:* str

Specifies a logo to display on the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#logo_file TransferWebApp#logo_file}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization.parameter.title"></a>

- *Type:* str

Specifies a title to display on the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#title TransferWebApp#title}

---

##### `put_web_app_units` <a name="put_web_app_units" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppUnits"></a>

```python
def put_web_app_units(
  provisioned: typing.Union[int, float] = None
) -> None
```

###### `provisioned`<sup>Optional</sup> <a name="provisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppUnits.parameter.provisioned"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}.

---

##### `reset_access_endpoint` <a name="reset_access_endpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetAccessEndpoint"></a>

```python
def reset_access_endpoint() -> None
```

##### `reset_endpoint_details` <a name="reset_endpoint_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetEndpointDetails"></a>

```python
def reset_endpoint_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_web_app_customization` <a name="reset_web_app_customization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppCustomization"></a>

```python
def reset_web_app_customization() -> None
```

##### `reset_web_app_endpoint_policy` <a name="reset_web_app_endpoint_policy" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy"></a>

```python
def reset_web_app_endpoint_policy() -> None
```

##### `reset_web_app_units` <a name="reset_web_app_units" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppUnits"></a>

```python
def reset_web_app_units() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransferWebApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isConstruct"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransferWebApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferWebApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetails">endpoint_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference">TransferWebAppEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetails">identity_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference">TransferWebAppIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList">TransferWebAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomization">web_app_customization</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference">TransferWebAppWebAppCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppId">web_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnits">web_app_units</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference">TransferWebAppWebAppUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpointInput">access_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetailsInput">endpoint_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetailsInput">identity_provider_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomizationInput">web_app_customization_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput">web_app_endpoint_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnitsInput">web_app_units_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpoint">access_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicy">web_app_endpoint_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint_details`<sup>Required</sup> <a name="endpoint_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetails"></a>

```python
endpoint_details: TransferWebAppEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference">TransferWebAppEndpointDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_details`<sup>Required</sup> <a name="identity_provider_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetails"></a>

```python
identity_provider_details: TransferWebAppIdentityProviderDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference">TransferWebAppIdentityProviderDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tags"></a>

```python
tags: TransferWebAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList">TransferWebAppTagsList</a>

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `web_app_customization`<sup>Required</sup> <a name="web_app_customization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomization"></a>

```python
web_app_customization: TransferWebAppWebAppCustomizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference">TransferWebAppWebAppCustomizationOutputReference</a>

---

##### `web_app_id`<sup>Required</sup> <a name="web_app_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppId"></a>

```python
web_app_id: str
```

- *Type:* str

---

##### `web_app_units`<sup>Required</sup> <a name="web_app_units" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnits"></a>

```python
web_app_units: TransferWebAppWebAppUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference">TransferWebAppWebAppUnitsOutputReference</a>

---

##### `access_endpoint_input`<sup>Optional</sup> <a name="access_endpoint_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpointInput"></a>

```python
access_endpoint_input: str
```

- *Type:* str

---

##### `endpoint_details_input`<sup>Optional</sup> <a name="endpoint_details_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetailsInput"></a>

```python
endpoint_details_input: IResolvable | TransferWebAppEndpointDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

---

##### `identity_provider_details_input`<sup>Optional</sup> <a name="identity_provider_details_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetailsInput"></a>

```python
identity_provider_details_input: IResolvable | TransferWebAppIdentityProviderDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TransferWebAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]

---

##### `web_app_customization_input`<sup>Optional</sup> <a name="web_app_customization_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomizationInput"></a>

```python
web_app_customization_input: IResolvable | TransferWebAppWebAppCustomization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

---

##### `web_app_endpoint_policy_input`<sup>Optional</sup> <a name="web_app_endpoint_policy_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput"></a>

```python
web_app_endpoint_policy_input: str
```

- *Type:* str

---

##### `web_app_units_input`<sup>Optional</sup> <a name="web_app_units_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnitsInput"></a>

```python
web_app_units_input: IResolvable | TransferWebAppWebAppUnits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---

##### `access_endpoint`<sup>Required</sup> <a name="access_endpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpoint"></a>

```python
access_endpoint: str
```

- *Type:* str

---

##### `web_app_endpoint_policy`<sup>Required</sup> <a name="web_app_endpoint_policy" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicy"></a>

```python
web_app_endpoint_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppConfig <a name="TransferWebAppConfig" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_provider_details: TransferWebAppIdentityProviderDetails,
  access_endpoint: str = None,
  endpoint_details: TransferWebAppEndpointDetails = None,
  tags: IResolvable | typing.List[TransferWebAppTags] = None,
  web_app_customization: TransferWebAppWebAppCustomization = None,
  web_app_endpoint_policy: str = None,
  web_app_units: TransferWebAppWebAppUnits = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.identityProviderDetails">identity_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | You can provide a structure that contains the details for the identity provider to use with your web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.accessEndpoint">access_endpoint</a></code> | <code>str</code> | The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.endpointDetails">endpoint_details</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]</code> | Key-value pairs that can be used to group and search for web apps. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppCustomization">web_app_customization</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy">web_app_endpoint_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppUnits">web_app_units</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_provider_details`<sup>Required</sup> <a name="identity_provider_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.identityProviderDetails"></a>

```python
identity_provider_details: TransferWebAppIdentityProviderDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

You can provide a structure that contains the details for the identity provider to use with your web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}

---

##### `access_endpoint`<sup>Optional</sup> <a name="access_endpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.accessEndpoint"></a>

```python
access_endpoint: str
```

- *Type:* str

The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app.

You can specify a custom URL or use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}

---

##### `endpoint_details`<sup>Optional</sup> <a name="endpoint_details" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.endpointDetails"></a>

```python
endpoint_details: TransferWebAppEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TransferWebAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]

Key-value pairs that can be used to group and search for web apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}

---

##### `web_app_customization`<sup>Optional</sup> <a name="web_app_customization" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppCustomization"></a>

```python
web_app_customization: TransferWebAppWebAppCustomization
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}.

---

##### `web_app_endpoint_policy`<sup>Optional</sup> <a name="web_app_endpoint_policy" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy"></a>

```python
web_app_endpoint_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}.

---

##### `web_app_units`<sup>Optional</sup> <a name="web_app_units" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppUnits"></a>

```python
web_app_units: TransferWebAppWebAppUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}.

---

### TransferWebAppEndpointDetails <a name="TransferWebAppEndpointDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppEndpointDetails(
  vpc: TransferWebAppEndpointDetailsVpc = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | You can provide a structure that contains the details for the VPC endpoint to use with your web app. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails.property.vpc"></a>

```python
vpc: TransferWebAppEndpointDetailsVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

You can provide a structure that contains the details for the VPC endpoint to use with your web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc TransferWebApp#vpc}

---

### TransferWebAppEndpointDetailsVpc <a name="TransferWebAppEndpointDetailsVpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppEndpointDetailsVpc(
  ip_address_type: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the VPC endpoint used by the web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}. |

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type for the VPC endpoint used by the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#ip_address_type TransferWebApp#ip_address_type}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}.

---

### TransferWebAppIdentityProviderDetails <a name="TransferWebAppIdentityProviderDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppIdentityProviderDetails(
  instance_arn: str = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.instanceArn">instance_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.role">role</a></code> | <code>str</code> | The IAM role in IAM Identity Center used for the web app. |

---

##### `instance_arn`<sup>Optional</sup> <a name="instance_arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.role"></a>

```python
role: str
```

- *Type:* str

The IAM role in IAM Identity Center used for the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#role TransferWebApp#role}

---

### TransferWebAppTags <a name="TransferWebAppTags" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#key TransferWebApp#key}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#value TransferWebApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#key TransferWebApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#value TransferWebApp#value}.

---

### TransferWebAppWebAppCustomization <a name="TransferWebAppWebAppCustomization" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppWebAppCustomization(
  favicon_file: str = None,
  logo_file: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.faviconFile">favicon_file</a></code> | <code>str</code> | Specifies a favicon to display in the browser tab. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.logoFile">logo_file</a></code> | <code>str</code> | Specifies a logo to display on the web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.title">title</a></code> | <code>str</code> | Specifies a title to display on the web app. |

---

##### `favicon_file`<sup>Optional</sup> <a name="favicon_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.faviconFile"></a>

```python
favicon_file: str
```

- *Type:* str

Specifies a favicon to display in the browser tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#favicon_file TransferWebApp#favicon_file}

---

##### `logo_file`<sup>Optional</sup> <a name="logo_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.logoFile"></a>

```python
logo_file: str
```

- *Type:* str

Specifies a logo to display on the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#logo_file TransferWebApp#logo_file}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.title"></a>

```python
title: str
```

- *Type:* str

Specifies a title to display on the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#title TransferWebApp#title}

---

### TransferWebAppWebAppUnits <a name="TransferWebAppWebAppUnits" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppWebAppUnits(
  provisioned: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits.property.provisioned">provisioned</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}. |

---

##### `provisioned`<sup>Optional</sup> <a name="provisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits.property.provisioned"></a>

```python
provisioned: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWebAppEndpointDetailsOutputReference <a name="TransferWebAppEndpointDetailsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc">put_vpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc` <a name="put_vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc"></a>

```python
def put_vpc(
  ip_address_type: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
) -> None
```

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc.parameter.ipAddressType"></a>

- *Type:* str

The IP address type for the VPC endpoint used by the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#ip_address_type TransferWebApp#ip_address_type}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}.

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}.

---

##### `reset_vpc` <a name="reset_vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resetVpc"></a>

```python
def reset_vpc() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference">TransferWebAppEndpointDetailsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpcInput">vpc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpc"></a>

```python
vpc: TransferWebAppEndpointDetailsVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference">TransferWebAppEndpointDetailsVpcOutputReference</a>

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpcInput"></a>

```python
vpc_input: IResolvable | TransferWebAppEndpointDetailsVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferWebAppEndpointDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

---


### TransferWebAppEndpointDetailsVpcOutputReference <a name="TransferWebAppEndpointDetailsVpcOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferWebAppEndpointDetailsVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

---


### TransferWebAppIdentityProviderDetailsOutputReference <a name="TransferWebAppIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetInstanceArn">reset_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetRole">reset_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_arn` <a name="reset_instance_arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetInstanceArn"></a>

```python
def reset_instance_arn() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetRole"></a>

```python
def reset_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferWebAppIdentityProviderDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---


### TransferWebAppTagsList <a name="TransferWebAppTagsList" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferWebAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TransferWebAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>]

---


### TransferWebAppTagsOutputReference <a name="TransferWebAppTagsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferWebAppTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>

---


### TransferWebAppWebAppCustomizationOutputReference <a name="TransferWebAppWebAppCustomizationOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppWebAppCustomizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetFaviconFile">reset_favicon_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetLogoFile">reset_logo_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_favicon_file` <a name="reset_favicon_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetFaviconFile"></a>

```python
def reset_favicon_file() -> None
```

##### `reset_logo_file` <a name="reset_logo_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetLogoFile"></a>

```python
def reset_logo_file() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFileInput">favicon_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFileInput">logo_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFile">favicon_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFile">logo_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `favicon_file_input`<sup>Optional</sup> <a name="favicon_file_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFileInput"></a>

```python
favicon_file_input: str
```

- *Type:* str

---

##### `logo_file_input`<sup>Optional</sup> <a name="logo_file_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFileInput"></a>

```python
logo_file_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `favicon_file`<sup>Required</sup> <a name="favicon_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFile"></a>

```python
favicon_file: str
```

- *Type:* str

---

##### `logo_file`<sup>Required</sup> <a name="logo_file" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFile"></a>

```python
logo_file: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferWebAppWebAppCustomization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

---


### TransferWebAppWebAppUnitsOutputReference <a name="TransferWebAppWebAppUnitsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_web_app

transferWebApp.TransferWebAppWebAppUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned">reset_provisioned</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_provisioned` <a name="reset_provisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned"></a>

```python
def reset_provisioned() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput">provisioned_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned">provisioned</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_input`<sup>Optional</sup> <a name="provisioned_input" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput"></a>

```python
provisioned_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned"></a>

```python
provisioned: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferWebAppWebAppUnits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---



